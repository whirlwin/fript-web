const LoginService = require('./login-service');

class LoginController {

    constructor() {
        this.loginService = new LoginService();
    }

    handleLogin(req, res) {
        LoginService.getInstance().hasLogin();
        res.send(200);
    }
}

module.exports = LoginController;