const AccountRepository = require('./account-repository');
const FacebookLoginService = require('./facebook-login-service');

let instance;

class AccountService {

    constructor() {
        this.accountRepository = new AccountRepository();
        this.facebookLoginService = new FacebookLoginService();
    }

    logIn(facebookToken) {
        return this.facebookLoginService.logIn(facebookToken);
    }

    createAccount() {

    }

    static getInstance() {
        if (instance == null) {
            instance = new AccountService();
        }
        return instance;
    }
}

module.exports = AccountService;