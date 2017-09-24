const featureToggles = require('../../settings/FeatureToggles');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const UserService = require('../../user/UserService');
const winston = require('winston');

let userService = new UserService();

class FacebookAuthService {

    constructor() {
        userService = new UserService();
    }

    initialize(app) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.use(new passportFacebook.Strategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "/login/facebook/callback"
        }, this.handleLogin.bind(this, userService)));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });

    }

    // Refresh token is undefined in Facebook OAuth 2.0
    handleLogin(userService, accessToken, undefinedRefreshToken, profile, done) {
        if (featureToggles.debugLogging.enabled) {
            winston.info(`handleLogin callback invoked:
                AT: ${accessToken}
                RT: ${undefinedRefreshToken}
                Profile ID: ${profile.id}`
            );
        }

        userService.logInWithFacebookToken(accessToken).then(profile => {
            done(null, profile);
        }).catch(err => {
            winston.error("Failed to log in user with error: " + JSON.stringify(err));
            done(err);
        });
    }
}

module.exports = FacebookAuthService;
