const AppConfig = require('./config/app-config');
const AppValidator = require('./app-validator');
const Router = require('./server/router');
const winston = require('winston');

class App {

    constructor() {
        this.appValidator = new AppValidator();
        this.appConfig = new AppConfig();
        this.router = new Router();
    }

    configure() {
        this.appValidator.validate();

        const { app, httpPort } = this.appConfig.configure();
        this.httpPort = httpPort;
        this.app = app;

        this.router.route(app);
    }

    start() {
        this.app.listen(this.httpPort, () =>
            winston.info(`App started on port ${this.httpPort}`));
    }
}

module.exports = App;
