const DbConfig = require('./DbConfig');
const ErrorEventConfig = require('./ErrorEventConfig');
const ExpressConfig = require('./ExpressConfig');
const HttpConfig = require('./HttpConfig');
const DotenvConfig = require("./DotenvConfig");

class AppConfig {

    constructor() {
        this.dbConfig = new DbConfig();
        this.errorEventConfig = new ErrorEventConfig();
        this.expressConfig = new ExpressConfig();
        this.httpConfig = new HttpConfig();
        this.dotenvConfig = new DotenvConfig();
    }

    configure() {
        this.dotenvConfig.configure();
        const app = this.expressConfig.configure();
        const httpPort = this.httpConfig.getHttpPort();
        this.errorEventConfig = this.errorEventConfig.configure();
        this.dbConfig.configure();
        return { app, httpPort };
    }
}

module.exports = AppConfig;
