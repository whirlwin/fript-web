const FeedbackService = require("./FeedbackService");
const gracepull = require("gracepull");
const winston = require("winston");

const UserPathEnum = require("../user/UserPathEnum");
const MatchingPathEnum = require("../matching/MatchingPathEnum");
const IndexPathEnum = require("../index/IndexPathEnum");

class FeedbackController {

    constructor() {
        this.feedbackService = new FeedbackService();
    }

    renderFeedbackForm(req, res) {
        res.render("feedback/feedback");
    }

    createFeedback(req, res) {
        const userId = gracepull(() => req.user.id);
        const content = req.body.content;
        this.feedbackService.createFeedback(userId, content)
            .then(result => res.redirect("feedback/thanks"))
            .catch(err => {
                winston.error("Failed to createFeedback feedback", err);
                res.render("common/error");
            })
    }

    renderFeedbackThanks(req, res) {
        res.render("feedback/feedback-thanks", {
            UserPathEnum,
            MatchingPathEnum,
            IndexPathEnum,
        });
    }
}

module.exports = FeedbackController;
