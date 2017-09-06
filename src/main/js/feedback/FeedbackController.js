const FeedbackService = require("./FeedbackService");
const winston = require("winston");

class FeedbackController {

    constructor() {
        this.feedbackService = new FeedbackService();
    }

    createFeedback(req, res) {
        const content = req.body.content;
        console.log(req.user);
        this.feedbackService.createFeedback(0, content)
            .then(result => res.sendStatus(200))
            .catch(err => {
                winston.error("Failed to create feedback", err);
                res.status(500).json(err);
            })
    }
}

module.exports = FeedbackController;
