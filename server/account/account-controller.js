const AccountService = require('./account-service');
const ErrorCodes = require('../error-codes');
const Optional = require('optional-js');
const winston = require('winston');

class AccountController {

    logIn(req, res) {
        return Optional.ofNullable(req.query)
            .flatMap(query => Optional.ofNullable(query.facebookToken))
            .map(facebookToken => AccountService.getInstance().logIn(facebookToken))
            .orElseGet(() => Promise.reject(`Query param facebookToken not present at ${req.path}`))
            .then(profile => res.json(profile))
            .catch(err => {
                winston.error('Failed to log in user: ', err);
                res.json(ErrorCodes.loginFailed);
            });
    }

    getAccount(req, res) {
        AccountService.getInstance().getAccount().then(hasLogin => {
            res.send('foo: ' + hasLogin);
        }).catch(err => {
            winston.error('Failed to check if has login', err);
            res.status(500).send();
        });
    }
}

module.exports = AccountController;