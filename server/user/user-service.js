const FacebookApiFacade = require('./login/facebook-api-facade');
const FacebookTokenRepository = require('./login/facebook-token-repository');
const Optional = require('optional-js');
const Try = require('try-js');
const UserMapper = require('./user-mapper');
const UserRepository = require('./user-repository');
const UserValidator = require('./user-validator');

let instance;

class UserService {

    constructor() {
        this.facebookApiFacade = new FacebookApiFacade();
        this.facebookTokenRepository = new FacebookTokenRepository();
        this.userMapper = new UserMapper();
        this.userRepository = new UserRepository();
        this.userValidator = new UserValidator();
    }

    getUserByAuthHeader(authHeader) {
        return Optional.ofNullable(authHeader)
            .map(header => authHeader.replace('Bearer ', ''))
            .map(facebookToken => Try.success(facebookToken))
            .orElseGet(() => Try.failure('Failed to get auth header'))
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

    updateUser(user, userId) {
        return this.userValidator.validateUpdateUser(user)
            .flatMap(user => this.userRepository.updateUser())
    }

    static getInstance() {
        if (instance == null) {
            instance = new UserService();
        }
        return instance;
    }
}

module.exports = UserService;