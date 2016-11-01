const FacebookApiFacade = require('./login/facebook-api-facade');
const UserRepository = require('./user-repository');
const winston = require('winston');

let instance;

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
        this.facebookApiFacade = new FacebookApiFacade();
    }

    logIn(facebookToken) {
        return this.facebookApiFacade.getDetailsByFacebookToken(facebookToken)
            .then(details => this.userRepository.getUserById(details.id)
                .then(profile => profile
                    .orElseGet(() => this.userRepository.createUser(details)
                        .then(nothing => this.userRepository.getUserById(details.id)
                            .then(profile => profile.get())))));
    }

    static getInstance() {
        if (instance == null) {
            instance = new UserService();
        }
        return instance;
    }
}

module.exports = UserService;