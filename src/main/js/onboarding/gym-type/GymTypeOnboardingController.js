const UserService = require("../../user/UserService");
const GymTypeOnboardingService = require("./GymTypeOnboardingService");
const GymTypePreferenceService = require("../../gym-type/preference/GymTypePreferenceService");
const winston = require("winston");

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
        const preference = { gymTypeId: req.body.gymTypeId };
        this.gymTypePreferenceService.createPreference()
        // TODO: Implement createGymTypePreference logic
        res.redirect("/matching/matching");

    }
}

module.exports = GymTypeOnboardingController;
