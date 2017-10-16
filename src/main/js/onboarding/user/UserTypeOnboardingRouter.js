const ExpressRouter = require('../../routing/ExpressRouter');
const Path = require('./UserTypeOnboardingPathEnum');
const UserTypeOnboardingController = require('./UserTypeOnboardingController');
const UserMiddleware = require('../../user/UserMiddleware');

const controller = new UserTypeOnboardingController();
const middleware = new UserMiddleware();
const router = new ExpressRouter();

router.route(Path.render, controller.render.bind(controller), middleware.resolveUser.bind(middleware));
router.route(Path.addPreferences, controller.addPreferences.bind(controller), middleware.resolveUser.bind(middleware));

module.exports = router.getRouter();
