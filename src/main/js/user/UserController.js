const UserService = require('./UserService');
const UserValidator = require('./UserValidator');
const ErrorCodes = require('../ErrorCodes');
const winston = require('winston');

class UserController {

    constructor() {
        this.userValidator = new UserValidator();
        this.userService = new UserService();
    }

    createUser(req, res) {
        this.userValidator.validateHasFacebookToken(req.query.facebookToken)
            .then(facebookToken => this.userService.createUser(facebookToken));
    }

    logIn(req, res) {
        this.userValidator.validateHasFacebookToken(req.query.facebookToken)
            .then(facebookToken => this.userService.logIn(facebookToken))
            .then(user => res.json(user))
            .catch(err => {
                winston.error("Failed to log in user ", err);
                return res.status(500).json(ErrorCodes.login)
            });

    }

    // TODO: Deprecated - might not work - remove when safe
    tryLogIn(req, res) {
        this.userValidator.tryValidateHasFacebookToken(req.query.facebookToken)
            .flatMap(facebookToken => UserService.getInstance().logIn(facebookToken))
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .onSuccess(user => res.json(user))
            .onFailure(err => winston.error('Failed to log in user: ', err))
            .onFailure(err => res.status(500).json(ErrorCodes.login));
    }

    updateUser(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
    }
}

module.exports = UserController;
