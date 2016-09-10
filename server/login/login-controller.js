const LoginService = require('./login-service');

class LoginController {

    constructor() {
        this.loginService = new LoginService();
    }

    handleLogin(req, res) {
        this.loginService.hasLogin();
        res.send(200);
    }
}

module.exports = LoginController;