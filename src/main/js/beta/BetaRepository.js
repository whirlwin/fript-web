const DbProvider = require('../DBProvider');

class BetaRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    createEarlyAccess(email) {
        const sql = "INSERT INTO early_access(email) VALUES($(email))";
        const params = {
            email: email
        };
        return this.db.query(sql, params);
    }
}

module.exports = BetaRepository;
