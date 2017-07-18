let RequestLogger;
let UserRouter;
let NavigationRouter;

class Router {

    requireRouters() {
        RequestLogger = require('./RequestLogger');
        UserRouter = require('./user/UserRouter');
        NavigationRouter = require('./navigation/NavigationRouter');
    }

    route(app) {
        this.requireRouters();

        app.use(RequestLogger);
        app.use(NavigationRouter);
        app.use(UserRouter);
    }
}

module.exports = Router;

