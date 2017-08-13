const UserService = require('./UserService');
const UserValidator = require('./UserValidator');
const ErrorCodes = require('../error/ErrorCodes');
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
            .then(facebookToken => this.userService.logInWithFacebookToken(facebookToken))
            .then(user => res.json(user))
            .catch(err => {
                winston.error("Failed to log in user ", err);
                return res.status(500).json(ErrorCodes.login)
            });

    }
}

module.exports = UserController;
