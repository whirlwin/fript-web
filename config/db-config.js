const DbProvider = require('../server/db-provider');
const pgp = require('pg-promise');
const Settings = require('../settings');

class DbConfig {

    configure() {
        const config = this.getDbConfig();
        const db = pgp()(config);
        DbProvider.init(db);
    }

    getDbConfig() {
        return {
            database: Settings[process.env.ENV].db.dbName,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: Settings[process.env.ENV].db.host,
            port: Settings[process.env.ENV].db.port,
            ssl: true
        };
    }
}

module.exports = DbConfig;