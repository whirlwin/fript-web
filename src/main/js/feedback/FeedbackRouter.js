const ExpressRouter = require('../routing/ExpressRouter');
const Path = require('./FeedbackPathEnum');
const FeedbackController = require('./FeedbackController');
const UserMiddleware = require('../user/UserMiddleware');

const feedbackController = new FeedbackController();
const expressRouter = new ExpressRouter();

expressRouter.route(Path.renderFeedbackForm, feedbackController.renderFeedbackForm.bind(feedbackController));
expressRouter.route(Path.createFeedback, feedbackController.createFeedback.bind(feedbackController));
expressRouter.route(Path.renderFeedbackThanks, feedbackController.renderFeedbackThanks.bind(feedbackController));

module.exports = expressRouter.getRouter();
