const UserService = require("../../user/UserService");
const GymTypeOnboardingService = require("./GymTypeOnboardingService");
const winston = require("winston");

class GymTypeOnboardingController {

    constructor() {
        this.userService = new UserService();
        this.gymCenterOnboardingService = new GymTypeOnboardingService();
    }

    render(req, res) {
        this.gymCenterOnboardingService.get(req.user.id)
            .then(gymTypes => res.render("onboarding/gym-type-onboarding", { gymTypes: gymTypes } ))
            .catch(err => {
                winston.error("Failed to render user user type onboarding page", err);
                res.status(500).json({});
            });
    }

    create(req, res) {
        // TODO: Implement createFeedback logic
        res.redirect("/matching/matching");

    }
}

module.exports = GymTypeOnboardingController;
