const AppConfig = require("./config/AppConfig");
const Router = require("./routing/MainRouter");
const winston = require("winston");

class App {

    constructor() {
        this.appConfig = new AppConfig();
        this.router = new Router();
    }

    configure() {
        const { app, httpPort } = this.appConfig.configure();
        this.app = app;
        this.httpPort = httpPort;
        App._initializeFacebookAuthService(app);
        this.router.route(app);
    }

    // Needs to be required after app has been configured (with DB) because of DB dependency from sub-requires of
    // FacebookAuthService
    static _initializeFacebookAuthService(app) {
        const FacebookAuthService = require("./user/login/FacebookAuthService");
        new FacebookAuthService().initialize(app);
    }

    start() {
        this.app.listen(this.httpPort, () => {
            winston.info(`api started on port: ${this.httpPort}`)
        });
    }
}

module.exports = App;
