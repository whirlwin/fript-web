const DbUtil = require('../db-util');

class LoginRepository {

    constructor() {
        this.db = DbUtil.getDb();
    }

    hasLoggedIn() {
        return this.db.query("SELECT * FROM login");
    }

}

module.exports = LoginRepository;
