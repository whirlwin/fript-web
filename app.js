const AppConfig = require('./config/app-config');
const Router = require('./server/router');
const winston = require('winston');

class App {

    constructor() {
        this.appConfig = new AppConfig();
        this.router = new Router();
    }

    configure() {
        const appConfig = this.appConfig.configure();
        this.app = appConfig.app;
        this.winston = this.winstonConfig.configure();
        this.errorEventConfig = this.errorEventConfig.configure();
        this.dbConfig.configure();
        this.router.route(this.app);
    }

    start() {
        const httpPort = this.httpConfig.getHttpPort();
        this.app.listen(httpPort, () => winston.info(`App started on port ${httpPort}`));
    }
}

module.exports = App;
