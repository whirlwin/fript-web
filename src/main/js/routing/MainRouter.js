class Router {

    route(app) {
        app.use(require('../security/ApiKeyMiddleware'));
        app.use(require('../global/RequestLoggerMiddleware'));
        app.use(require('../global/UserMockMiddleware'));
        app.use(require('../navigation/NavigationRouter'));
        app.use(require('../user/UserRouter'));
        app.use(require("../index/IndexRouter"));
        app.use(require('../feedback/FeedbackRouter'));
        app.use(require('../onboarding/OnboardingRouter'));
        app.use(require('../onboarding/user/UserTypeOnboardingRouter'));
        app.use(require('../error/ErrorHandlerMiddleware'));
    }
}

module.exports = Router;

