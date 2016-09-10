const DbUtil = require('../db-util');

class LoginRepository {

    constructor() {
        this.pool = DbUtil.getPool();
    }

    hasLoggedIn() {
        this.pool.query("SELECT * FROM login", (err, hasLoggedIn) => {
            if (err) {
                return Promise.reject();
            } else {
                return Promise.resolve(hasLoggedIn);
            }
        });
    }
}

module.exports = LoginRepository;
