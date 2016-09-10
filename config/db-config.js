const DbUtil = require('../server/db-util');
const pg = require('pg');

class DbConfig {

    configure() {
        const config = {};
        const pool = new pg.Pool(config);
        DbUtil.initializePool(pool);
    }
}

module.exports = DbConfig;