const FacebookApiFacade = require('./login/FacebookApiFacade');
const FacebookTokenRepository = require('./login/FacebookTokenRepository');
const UserMapper = require('./UserMapper');
const UserRepository = require('./UserRepository');
const UserValidator = require('./UserValidator');

class UserService {

    constructor() {
        this.facebookApiFacade = new FacebookApiFacade();
        this.facebookTokenRepository = new FacebookTokenRepository();
        this.userMapper = new UserMapper();
        this.userRepository = new UserRepository();
        this.userValidator = new UserValidator();
    }

    logInWithFacebookToken(facebookToken) {
        return this.facebookTokenRepository.getUserByFacebookToken(facebookToken)
            .catch(err => this.facebookApiFacade.getFacebookUser(facebookToken))
            .then(user => this.userRepository.createUser(user))
            .then(user => this.facebookTokenRepository.storeFacebookToken(facebookToken, user));
    }

    logInWithAuthHeader(authHeader) {
        const facebookToken = this._extractFacebookToken(authHeader);
        return this.logInWithFacebookToken(facebookToken);
    }

    getUserByAuthHeader(authHeader) {
        const facebookToken = this._extractFacebookToken(authHeader);
        console.log("fb token: " + facebookToken)
        return this.facebookTokenRepository.getUserByFacebookToken(facebookToken);

    }

    _extractFacebookToken(authHeader) {
        return authHeader.replace('Bearer ', '');
    }
}

module.exports = UserService;
