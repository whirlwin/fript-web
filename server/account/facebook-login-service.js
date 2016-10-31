const FacebookApiFacade = require('./facebook-api-facade');
const FacebookLoginRepository = require('./facebook-login-repository');
const Optional = require('optional-js');
const winston = require('winston');

class FacebookLoginService {

    constructor() {
        this.facebookApiFacade = new FacebookApiFacade();
        this.facebookLoginRepository = new FacebookLoginRepository();
    }

    logIn(facebookToken) {
        this.facebookApiFacade.getDetailsByFacebookToken(facebookToken)
            .then(details => this.facebookLoginRepository.getFacebookProfile(details)
                .then(profile => profile
                    .orElseGet(() => this.facebookLoginRepository.createFacebookProfile(details))))
            .then(n => console.log(123123123))
            .catch(e => console.error(e));
    }


    storeLoginDetails() {

    }
}

module.exports = FacebookLoginService;