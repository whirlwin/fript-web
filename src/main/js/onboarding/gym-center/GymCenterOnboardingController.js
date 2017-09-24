const UserService = require("../../user/UserService");
const GymCenterOnboardingService = require("./GymCenterOnboardingService");
const winston = require("winston");

class GymTypeOnboardingController {

    constructor() {
        this.userService = new UserService();
        this.gymCenterOnboardingService = new GymCenterOnboardingService();
    }

    render(req, res) {
        this.gymCenterOnboardingService.get(req.user.id)
            .then(gymCenters => res.render("onboarding/gym-center-onboarding", { gymCenters: gymCenters } ))
            .catch(err => {
                winston.error("Failed to render user user type onboarding page", err);
                res.status(500).json({});
            });
    }

    get(req, res) {
        const authHeader = req.headers.authorization;
        this.userService.getUserByAuthHeader(authHeader)
            .then(user => this.gymCenterOnboardingService.getByUserId(user.id))
            .then(userTypeOnboarding =>  res.json(userTypeOnboarding))
            .catch(err => {
                winston.error("Failed to get user onboarding", err);
                res.status(500).json(ErrorCodes.getUserTypeOnboarding);
            });
    }

    create(req, res) {

    }
}

module.exports = GymTypeOnboardingController;
