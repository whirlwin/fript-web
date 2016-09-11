const DbUtil = require('../server/db-util');
const pg = require('pg');

class DbConfig {

    configure() {
        const config = {
            database: this.getDbName()
        };
        const pool = new pg.Pool(config);
        DbUtil.initializePool(pool);
    }

    getDbName() {
        return process.env.DB_NAME || 'fript_dev';
    }
}

module.exports = DbConfig;