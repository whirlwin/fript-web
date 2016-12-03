const UserService = require('./user-service');
const ErrorCodes = require('../error-codes');
const Optional = require('optional-js');
const Try = require('try-js');
const winston = require('winston');

class UserController {

    logIn(req, res) {
        Optional.ofNullable(req.query)
            .flatMap(query => Optional.ofNullable(query.facebookToken))
            .map(facebookToken => UserService.getInstance().logIn(facebookToken))
            .orElseGet(() => Try.failure(`Query param facebookToken not present at ${req.path}`))
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .onSuccess(user => res.json(user))
            .onFailure(err => {
                winston.error('Failed to log in user: ', err);
                res.json(ErrorCodes.loginFailed);
            });
    }
}

module.exports = UserController;