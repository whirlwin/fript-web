const UserService = require('./UserService');
const ErrorCodes = require('../ErrorCodes');
const winston = require('winston');

class UserController {

    logIn(req, res) {
        const facebookToken = req.query.facebookToken;
        UserService.getInstance().logIn(facebookToken)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .onSuccess(user => res.json(user))
            .onFailure(err => winston.error('Failed to log in user: ', err))
            .onFailure(err => res.status(500).json(ErrorCodes.login));
    }

    updateUser(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().tryGetUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
    }
}

module.exports = UserController;
