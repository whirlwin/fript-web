const FacebookApiFacade = require('./login/FacebookApiFacade');
const FacebookTokenRepository = require('./login/FacebookTokenRepository');
const Optional = require('optional-js');
const Try = require('try-js');
const UserMapper = require('./UserMapper');
const UserRepository = require('./UserRepository');
const UserValidator = require('./UserValidator');

let instance;

class UserService {

    constructor() {
        this.facebookApiFacade = new FacebookApiFacade();
        this.facebookTokenRepository = new FacebookTokenRepository();
        this.userMapper = new UserMapper();
        this.userRepository = new UserRepository();
        this.userValidator = new UserValidator();
    }


    // TODO: Get user by auth header
    tryGetUserByAuthHeader(authHeader) {
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
        return this.facebookApiFacade.getDetailsByFacebookTokenAsTry(facebookToken)
            .map(facebookUser => this.userMapper.mapToUser(facebookUser))
            .flatMap(user => this.userRepository.tryCreateUser(user))
            .flatMap(user => this.facebookTokenRepository.storeFacebookToken(facebookToken, user))
            .flatMap(user => this.userRepository.getUserById(user.id));
    }

    createUser(facebookToken) {
        return this.facebookApiFacade.getDetails(facebookToken)
            .then(details => this.userMapper.mapToUser(details))
            .then(user => this.userRepository.createUser(user))
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
