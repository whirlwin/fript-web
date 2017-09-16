const UserService = require("../../user/UserService");
const UserTypeOnboardingService = require("./UserTypeOnboardingService");
const winston = require("winston");

class UserTypeOnboardingController {

    constructor() {
        this.userService = new UserService();
        this.userTypeOnboardingService = new UserTypeOnboardingService();
    }

    render(req, res) {
        this.userTypeOnboardingService.get(req.user.id)
            .then(userTypeOnboarding => res.render("onboarding/user/user-onboarding"))
            .catch(err => {
                winston.error("Failed to render user user type onboarding page", err);
                res.status(500).json({});
            });
    }

    get(req, res) {
        const authHeader = req.headers.authorization;
        this.userService.getUserByAuthHeader(authHeader)
            .then(user => this.userTypeOnboardingService.getByUserId(user.id))
            .then(userTypeOnboarding =>  res.json(userTypeOnboarding))
            .catch(err => {
                winston.error("Failed to get user onboarding", err);
                res.status(500).json(ErrorCodes.getUserTypeOnboarding);
            });
    }

    create(req, res) {

    }
}

module.exports = UserTypeOnboardingController;
