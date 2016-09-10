const DbConfig = require('./config/db-config');
const ExpressConfig = require('./config/express-config');
const HttpConfig = require('./config/http-config');
const Router = require('./server/router');
const WinstonConfig = require('./config/winston-config');

class App {

    constructor() {
        this.dbConfig = new DbConfig();
        this.expressConfig = new ExpressConfig();
        this.httpConfig = new HttpConfig();
        this.router = new Router();
        this.winstonConfig = new WinstonConfig();
    }

    configure() {
        this.app = this.expressConfig.configure();
        this.winston = this.winstonConfig.configure();
        this.dbConfig.configure();
        this.router.route(this.app);
    }

    start() {
        const httpPort = this.httpConfig.getHttpPort();
        this.app.listen(httpPort, () => this.winston.info(`App started on port ${httpPort}`));
    }
}

module.exports = App;
