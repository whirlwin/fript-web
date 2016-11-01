const FacebookApiFacade = require('./login/facebook-api-facade');
const FacebookTokenRepository = require('./login/facebook-token-repository');
const UserRepository = require('./user-repository');
const winston = require('winston');

let instance;

class UserService {

    constructor() {
        this.facebookApiFacade = new FacebookApiFacade();
        this.facebookTokenRepository = new FacebookTokenRepository();
        this.userRepository = new UserRepository();
    }

    logIn(facebookToken) {
        return this.facebookTokenRepository.getUserByFacebookToken(facebookToken)
            .then(maybeUser => maybeUser.orElseGet(() => this.facebookApiFacade.getDetailsByFacebookToken(facebookToken)
                .then(details => this.userRepository.getUserById(details.id)
                    .then(profile => profile.orElseGet(() => this.createAndGetUser(details))))))
            .then(user => this.storeLoginData({ facebookToken, user }));
    }

    createAndGetUser(details) {
        return this.userRepository.createUser(details)
            .then(nothing => this.userRepository.getUserById(details.id)
                .then(profile => profile.get()))
    }

    storeLoginData({ facebookToken, user }) {
        return user;
    }

    static getInstance() {
        if (instance == null) {
            instance = new UserService();
        }
        return instance;
    }
}

module.exports = UserService;