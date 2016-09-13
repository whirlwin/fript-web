const DbUtil = require('../server/db-util');
const pg = require('pg');
const Settings = require('../settings');

class DbConfig {

    configure() {
        const config = {
            database: Settings[process.env.ENV].db.dbName,
            user: this.Settings[process.env.ENV].db.user,
            password: process.env.DB_PASSWORD,
            host: Settings[process.env.ENV].db.host,
            port: Settings[process.env.ENV].db.port
        };
        const pool = new pg.Pool(config);
        DbUtil.initializePool(pool);
    }

    getDbProperty(name) {
        return Settings[process.env.ENV].db[name];
    }

}

module.exports = DbConfig;