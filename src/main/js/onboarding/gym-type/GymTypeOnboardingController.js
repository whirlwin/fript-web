const UserService = require("../../user/UserService");
const GymTypeOnboardingService = require("./GymTypeOnboardingService");
const GymTypePreferenceService = require("../../gym-type/preference/GymTypePreferenceService");
const winston = require("winston");
const GymCenterOnboardingPathEnum = require("../gym-center/GymCenterOnboardingPathEnum");

class GymTypeOnboardingController {

    constructor() {
        this.userService = new UserService();
        this.userTypeOnboardingService = new GymTypeOnboardingService();
        this.gymTypePreferenceService = new GymTypePreferenceService();
    }

    render(req, res) {
        this.userTypeOnboardingService.get(req.user.id)
            .then(gymTypes => res.render("onboarding/gym-type-onboarding", { gymTypes: gymTypes } ))
            .catch(err => {
                winston.error("Failed to render gym type onboarding page", err);
                res.status(500).json({});
            });
    }

    createGymTypePreferences(req, res) {
        const gymTypeIds = req.body["gymTypeIds"].map(Number);
        this.gymTypePreferenceService.createPreferences(gymTypeIds, req.user.id)
            .then(preferences => res.redirect("/onboarding/gym-center"))
            .catch(err => {
                winston.error("Failed to create gym type preference for user " + req.user.id, err);
                res.status(500).json({});
            });

    }
}

module.exports = GymTypeOnboardingController;
