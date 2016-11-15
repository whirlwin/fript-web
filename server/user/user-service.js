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
            .orElse(() => this.handleGetAndCreateUser(facebookToken));

        /*
            .map(maybeUser => maybeUser.orElseGet(() => this.facebookApiFacade.getDetailsByFacebookToken(facebookToken)
                .then(details => this.userRepository.getUserById(details.id)
                    .then(profile => profile.orElseGet(() => this.createAndGetUser(details))))))
            .map(user => this.storeLoginData({ facebookToken, user }));
            */
    }

    handleGetAndCreateUser(facebookToken) {
        return this.facebookApiFacade.getDetailsByFacebookToken(facebookToken)
            .flatMap(userDetails => this.userRepository.createUser(userDetails)
                .flatMap(nothing => this.userRepository.getUserById(userDetails.id))
                .orElseGet())

            //.map(userDetails => )
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