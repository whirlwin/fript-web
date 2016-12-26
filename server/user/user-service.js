const FacebookApiFacade = require('./login/facebook-api-facade');
const FacebookTokenRepository = require('./login/facebook-token-repository');
const Try = require('try-js');
const UserMapper = require('./user-mapper');
const UserRepository = require('./user-repository');

let instance;

class UserService {

    constructor() {
        this.facebookApiFacade = new FacebookApiFacade();
        this.facebookTokenRepository = new FacebookTokenRepository();
        this.userMapper = new UserMapper();
        this.userRepository = new UserRepository();
    }

    getUserByAuthHeader(authHeader) {
        return Try.of(() => authHeader.replace('Bearer ', ''))
            .flatMap(facebookToken => this.logIn(facebookToken));
    }

    logIn(facebookToken) {
        return this.facebookTokenRepository.getUserByFacebookToken(facebookToken)
            .filter(maybeUser => maybeUser.isPresent())
            .orElse(() => this.handleGetAndCreateUser(facebookToken));
    }

    handleGetAndCreateUser(facebookToken) {
        return this.facebookApiFacade.getDetailsByFacebookToken(facebookToken)
            .map(facebookUser => this.userMapper.mapFacebookUserToUser(facebookUser))
            .flatMap(user => this.userRepository.createUser(user))
            .flatMap(user => this.facebookTokenRepository.storeFacebookToken(facebookToken, user))
            .flatMap(user => this.userRepository.getUserById(user.id));
    }

    static getInstance() {
        if (instance == null) {
            instance = new UserService();
        }
        return instance;
    }
}

module.exports = UserService;