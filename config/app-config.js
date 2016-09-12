const DbConfig = require('./config/db-config');
const ErrorEventConfig = require('./config/error-event-config');
const ExpressConfig = require('./config/express-config');
const HttpConfig = require('./config/http-config');
const WinstonConfig = require('./config/winston-config');

class AppConfig {

    constructor() {
        this.dbConfig = new DbConfig();
        this.errorEventConfig = new ErrorEventConfig();
        this.expressConfig = new ExpressConfig();
        this.httpConfig = new HttpConfig();
        this.router = new Router();
        this.winstonConfig = new WinstonConfig();
    }

    configure() {
        const app = this.expressConfig.configure();
        this.winstonConfig.configure();
        this.errorEventConfig = this.errorEventConfig.configure();
        this.dbConfig.configure();
        return { app, httpConfig };
    }
}

module.exports = AppConfig;
