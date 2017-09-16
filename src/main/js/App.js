const AppConfig = require("./config/AppConfig");
const Router = require("./routing/MainRouter");
const winston = require("winston");
const FacebookAuthService = require("./user/login/FacebookAuthService");

class App {

    constructor() {
        this.appConfig = new AppConfig();
        this.facebookAuthService = new FacebookAuthService();
        this.router = new Router();
    }

    configure() {
        const { app, httpPort } = this.appConfig.configure();
        this.app = app;
        this.httpPort = httpPort;
        this.facebookAuthService.initialize(this.app);
        this.router.route(app);
    }

    start() {
        this.app.listen(this.httpPort, () => {
            winston.info(`api started on port: ${this.httpPort}`)
        });
    }
}

module.exports = App;
