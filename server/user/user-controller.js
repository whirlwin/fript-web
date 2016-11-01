const UserService = require('./user-service');
const ErrorCodes = require('../error-codes');
const Optional = require('optional-js');
const winston = require('winston');

class UserController {

    logIn(req, res) {
        return Optional.ofNullable(req.query)
            .flatMap(query => Optional.ofNullable(query.facebookToken))
            .map(facebookToken => UserService.getInstance().logIn(facebookToken))
            .orElseGet(() => Promise.reject(`Query param facebookToken not present at ${req.path}`))
            .then(profile => res.json(profile))
            .catch(err => {
                winston.error('Failed to log in user: ', err);
                res.json(ErrorCodes.loginFailed);
            });
    }
}

module.exports = UserController;