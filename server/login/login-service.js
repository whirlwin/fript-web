const LoginRepository = require('./login-repository');

class LoginService {

    constructor() {
        this.loginRepository = new LoginRepository();
    }

    hasLogin() {
    }
}

module.exports = LoginService;