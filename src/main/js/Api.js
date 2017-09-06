const AppConfig = require('./config/AppConfig');
const Router = require('./routing/ApiRouter');
const winston = require('winston');

class Api {

    constructor() {
        this.appConfig = new AppConfig();
        this.router = new Router();
    }

    configure() {
        const { app, httpPort } = this.appConfig.configure();
        this.app = app;
        this.httpPort = httpPort;
        this.router.route(app);
    }

    start() {
        this.app.listen(this.httpPort, () => {
            winston.info(`api started on port: ${this.httpPort}`)
        });
    }
}

module.exports = Api;
