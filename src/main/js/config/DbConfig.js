const DbProvider = require('../DBProvider');
const pgp = require('pg-promise');

class DbConfig {

    configure() {
        const config = this.getDbConfig();
        const db = pgp()(config);
        DbProvider.init(db);
    }

    getDbConfig() {
        return {
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            ssl: true
        };
    }
}

module.exports = DbConfig;
