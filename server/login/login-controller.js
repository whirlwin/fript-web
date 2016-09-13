const LoginService = require('./login-service');

class LoginController {

    handleLogin(req, res) {
        LoginService.getInstance().hasLogin();
        res.send(200);
    }
}

module.exports = LoginController;