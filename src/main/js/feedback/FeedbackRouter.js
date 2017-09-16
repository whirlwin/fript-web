const ExpressRouter = require('../routing/ExpressRouter');
const Path = require('./FeedbackPathEnum');
const FeedbackController = require('./FeedbackController');
const UserMiddleware = require('../user/UserMiddleware');

const feedbackController = new FeedbackController();
const userMiddleware = new UserMiddleware();
const expressRouter = new ExpressRouter();

expressRouter.route(Path.render,
                    feedbackController.renderFeedbackView.bind(feedbackController),
                    userMiddleware.getUserByAuthHeader.bind(userMiddleware));

expressRouter.route(Path.create,
                    feedbackController.createFeedback.bind(feedbackController),
                    userMiddleware.getUserByAuthHeader.bind(userMiddleware));

module.exports = expressRouter.getRouter();
