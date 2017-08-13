let ApiKeyMiddlware;
let RequestLoggerMiddleware;
let NavigationRouter;
let UserRouter;
let OnboardingRouter;
let ErrorHandlerMiddleware;

class Router {

    requireRouters() {
        ApiKeyMiddlware = require('./security/ApiKeyMiddleware');
        RequestLoggerMiddleware = require('./RequestLoggerMiddleware');
        NavigationRouter = require('./navigation/NavigationRouter');
        UserRouter = require('./user/UserRouter');
        OnboardingRouter = require('./onboarding/OnboardingRouter');
        ErrorHandlerMiddleware = require('./error/ErrorHandlerMiddleware');
    }

    route(app) {
        this.requireRouters();

        app.use(ApiKeyMiddlware);
        app.use(RequestLoggerMiddleware);
        app.use(NavigationRouter);
        app.use(UserRouter);
        app.use(OnboardingRouter);
        app.use(ErrorHandlerMiddleware);
    }
}

module.exports = Router;

