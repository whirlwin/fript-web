const DbConfig = require('./db-config');
const ErrorEventConfig = require('./error-event-config');
const ExpressConfig = require('./express-config');
const HttpConfig = require('./http-config');

class AppConfig {

    constructor() {
        this.dbConfig = new DbConfig();
        this.errorEventConfig = new ErrorEventConfig();
        this.expressConfig = new ExpressConfig();
        this.httpConfig = new HttpConfig();
    }

    configure() {
        const app = this.expressConfig.configure();
        const httpPort = this.httpConfig.getHttpPort();
        this.errorEventConfig = this.errorEventConfig.configure();
        this.dbConfig.configure();
        return { app, httpPort };
    }
}

module.exports = AppConfig;
