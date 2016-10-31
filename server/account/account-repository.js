const DbProvider = require('../db-provider');

class AccountRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getAccountByFacebookToken() {
        const sql = `SELECT * FROM account a
            INNER JOIN facebook_token ft ON ft.account_id = a.id`;
        return this.db.query(sql);
    }
}

module.exports = AccountRepository;
