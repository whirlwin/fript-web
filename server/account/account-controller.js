const AccountService = require('./account-service');
const Optional = require('optional-js');
const winston = require('winston');

class AccountController {

    logIn(req, res) {
        return Optional.ofNullable(req.query)
            .flatMap(body => Optional.ofNullable(body.facebookToken))
            .map(facebookToken => AccountService.getInstance().logIn(facebookToken))
            .map(account => () => res.json(1))
            .orElseGet(() => () => res.json(2))();
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