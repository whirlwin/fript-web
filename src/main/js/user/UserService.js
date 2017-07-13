const FacebookApiFacade = require('./login/FacebookApiFacade');
const FacebookTokenRepository = require('./login/FacebookTokenRepository');
const Optional = require('optional-js');
const Try = require('try-js');
const UserMapper = require('./UserMapper');
const UserRepository = require('./UserRepository');
const UserValidator = require('./UserValidator');

let instance;

// TODO: Fix problem with promise (try-js) or use other implementation UserService
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
            .orElse(() => this.tryHandleGetAndCreateUser(facebookToken));
    }

    tryHandleGetAndCreateUser(facebookToken) {
        return this.facebookApiFacade.tryGetDetailsByFacebookToken(facebookToken)
            .map(facebookUser => this.userMapper.mapToUser(facebookUser))
            .flatMap(user => this.userRepository.tryCreateUser(user))
            .flatMap(user => this.facebookTokenRepository.tryStoreFacebookToken(facebookToken, user))
            .flatMap(user => this.userRepository.getUserById(user.id));
    }

    createUser(facebookToken) {
        return this.facebookApiFacade.getFacebookUser(facebookToken)
            .then(facebookUser => this.userMapper.mapToUser(facebookUser))
            .then(user => this.userRepository.createUser(user))
            .then(user => this.facebookTokenRepository.tryStoreFacebookToken(facebookToken, user));
    }

    /*
    createUser(facebookToken) {
        return this.facebookApiFacade.getFacebookUser(facebookToken)
            .then(details => this.userMapper.mapToUser(details))
            .then(user => this.userRepository.createUser(user))
    }
    */

    updateUser(user, userId) {
        return this.userValidator.tryValidateUpdateUser(user)
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
