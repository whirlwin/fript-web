const FacebookApiFacade = require('./facebook-api-facade');
const FacebookLoginRepository = require('./facebook-login-repository');
const winston = require('winston');

class FacebookLoginService {

    constructor() {
        this.facebookApiFacade = new FacebookApiFacade();
        this.facebookLoginRepository = new FacebookLoginRepository();
    }

    // TODO: Make more readable
    logIn(facebookToken) {
        return this.facebookApiFacade.getDetailsByFacebookToken(facebookToken)
            .then(details => this.facebookLoginRepository.getFacebookProfileById(details.id)
                .then(profile => profile
                    .orElseGet(() => this.facebookLoginRepository.createFacebookProfile(details)
                        .then(nothing => this.facebookLoginRepository.getFacebookProfileById(details.id)
                            .then(profile => profile.get())))));
    }
}

module.exports = FacebookLoginService;