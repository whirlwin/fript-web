const DbProvider = require('../db-provider');

class LoginRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    hasLoggedIn() {
        return this.db.query("SELECT * FROM login");
    }

}

module.exports = LoginRepository;
