const ExpressRouter = require('../routing/ExpressRouter');
const Paths = require('../routing/PathEnum');
const FeedbackController = require('./FeedbackController');
const UserMiddleware = require('../user/UserMiddleware');

const feedbackController = new FeedbackController();
const userMiddleware = new UserMiddleware();
const expressRouter = new ExpressRouter();

expressRouter.route(Paths.createFeedback, userMiddleware.getUserByAuthHeader.bind(userMiddleware), feedbackController.createFeedback.bind(feedbackController));

module.exports = expressRouter.getRouter();
