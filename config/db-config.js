const DbUtil = require('../server/db-util');
const pg = require('pg');
const Settings = require('../settings');

class DbConfig {

    configure() {
        const config = {
            database: this.getDbName()
        };
        const pool = new pg.Pool(config);
        DbUtil.initializePool(pool);
    }

    getDbName() {
        const env = process.env
        return Settings
    }
}

module.exports = DbConfig;