const AccountRepository = require('./account-repository');

let instance;

class AccountService {

    constructor() {
        this.loginRepository = new AccountRepository();
    }

    hasAccount() {
        return this.loginRepository.hasAccount();
    }

    static getInstance() {
        if (instance == null) {
            instance = new AccountService();
        }
        return instance;
    }
}

module.exports = AccountService;