const DbUtil = require('../server/db-util');
const pgp = require('pg-promise');
const Settings = require('../settings');
const winston = require('winston');

class DbConfig {

    configure() {
        const config = this.getDbConfig();
        const db = pgp()(config);
        DbUtil.initializeDb(db);
    }

    getDbConfig() {
        return {
            database: Settings[process.env.ENV].db.dbName,
            user: Settings[process.env.ENV].db.user,
            password: process.env.DB_PASSWORD,
            host: Settings[process.env.ENV].db.host,
            port: Settings[process.env.ENV].db.port,
            ssl: true
        };
    }
}

module.exports = DbConfig;