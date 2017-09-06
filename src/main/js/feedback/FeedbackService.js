const FeedbackRepository = require('./FeedbackRepository');

class FeedbackService {

    constructor() {
        this.feedbackRepository = new FeedbackRepository();
    }

    createFeedback(userId, content) {
        return this.feedbackRepository.createFeedback(userId, content);
    }
}

module.exports = FeedbackService;
