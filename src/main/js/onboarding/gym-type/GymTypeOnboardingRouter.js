const ExpressRouter = require('../../routing/ExpressRouter');
const Path = require('./GymTypeOnboardingPathEnum');
const GymTypeOnboardingController = require('./GymTypeOnboardingController');
const UserMiddleware = require('../../user/UserMiddleware');

const controller = new GymTypeOnboardingController();
const middleware = new UserMiddleware();
const router = new ExpressRouter();

router.route(Path.render, controller.render.bind(controller), middleware.resolveUser.bind(middleware));
router.route(Path.createFeedback, controller.create.bind(controller), middleware.resolveUser.bind(middleware));

module.exports = router.getRouter();
