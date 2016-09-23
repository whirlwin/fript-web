const AccountService = require('./account-service');
const winston = require('winston');

class AccountController {

    getAccount(req, res) {
        AccountService.getInstance().hasAccount().then(hasLogin => {
            res.send('foo: ' + hasLogin);
        }).catch(err => {
            winston.error('Failed to check if has login', err);
            res.status(500).send();
        });
    }
}

module.exports = AccountController;