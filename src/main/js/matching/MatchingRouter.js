const ExpressRouter = require('../routing/ExpressRouter');
const Path = require('./MatchingPathEnum');
const GymTypeOnboardingController = require('./MatchingController');
const UserMiddleware = require('../user/UserMiddleware');

const controller = new GymTypeOnboardingController();
const middleware = new UserMiddleware();
const router = new ExpressRouter();

router.route(Path.renderMainMatchingView, controller.renderMainMatchingView.bind(controller), middleware.resolveUser.bind(middleware));

module.exports = router.getRouter();
