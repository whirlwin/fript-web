const LoginRepository = require('./login-repository');

let instance;

class LoginService {

    constructor() {
        this.loginRepository = new LoginRepository();
    }

    hasLogin() {
        return this.loginRepository.hasLoggedIn();
    }

    static getInstance() {
        if (instance == null) {
            instance = new LoginService();
        }
        return instance;
    }
}

module.exports = LoginService;