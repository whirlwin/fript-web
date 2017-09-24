const ExpressRouter = require('../../routing/ExpressRouter');
const Path = require('./GymCenterOnboardingPathEnum');
const GymCenterOnboardingController = require('./GymCenterOnboardingController');
const UserMiddleware = require('../../user/UserMiddleware');

const controller = new GymCenterOnboardingController();
const middleware = new UserMiddleware();
const router = new ExpressRouter();

router.route(Path.render, controller.render.bind(controller), middleware.resolveUser.bind(middleware));
router.route(Path.createFeedback, controller.create.bind(controller), middleware.resolveUser.bind(middleware));

module.exports = router.getRouter();
