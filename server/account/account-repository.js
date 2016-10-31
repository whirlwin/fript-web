const DbProvider = require('../db-provider');

class AccountRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getAccount() {
        return this.db.query("SELECT * FROM account");
    }
}

module.exports = AccountRepository;
