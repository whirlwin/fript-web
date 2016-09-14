const LoginService = require('./login-service');
const winston = require('winston');

class LoginController {

    handleLogin(req, res) {
        LoginService.getInstance().hasLogin().then(hasLogin => {
            res.send('foo: ' + hasLogin);
        }).catch(err => {
            winston.error('Failed to check if has login', err);
            res.status(500).send();
        });
    }
}

module.exports = LoginController;