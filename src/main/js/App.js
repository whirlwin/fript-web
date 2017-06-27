const AppConfig = require('./config/AppConfig');
const Router = require('./Router');
const winston = require('winston');

class App {

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
            winston.info("foobarbaz");
            winston.info(`app started on port: ${this.httpPort}`)
        });
    }
}

module.exports = App;
