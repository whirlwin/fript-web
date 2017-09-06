let ApiKeyMiddleware;
let RequestLoggerMiddleware;
let NavigationRouter;
let UserRouter;
let FeedbackRouter;
let OnboardingRouter;
let ErrorHandlerMiddleware;

class Router {

    // TODO: Require at top when strange DB issues are resolved
    requireRouters() {
        ApiKeyMiddleware = require('../security/ApiKeyMiddleware');
        RequestLoggerMiddleware = require('../RequestLoggerMiddleware');
        NavigationRouter = require('../navigation/NavigationRouter');
        UserRouter = require('../user/UserRouter');
        FeedbackRouter = require('../feedback/FeedbackRouter');
        OnboardingRouter = require('../onboarding/OnboardingRouter');
        ErrorHandlerMiddleware = require('../error/ErrorHandlerMiddleware');
    }

    route(app) {
        this.requireRouters();

        app.use(ApiKeyMiddleware);
        app.use(RequestLoggerMiddleware);
        app.use(NavigationRouter);
        app.use(UserRouter);
        app.use(FeedbackRouter);
        app.use(OnboardingRouter);
        app.use(ErrorHandlerMiddleware);
    }
}

module.exports = Router;

