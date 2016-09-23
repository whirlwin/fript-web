const DbProvider = require('../db-provider');

class AccountRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    hasAccount() {
        return this.db.query("SELECT * FROM account");
    }
}

module.exports = AccountRepository;
