const ErrorCodes = require("../../error/ErrorCodeEnum");
const UserService = require("../../user/UserService");
const UserTypeOnboardingValidator = require("./UserTypeOnboardingValidator");
const UserTypeOnboardingService = require("./UserTypeOnboardingService");
const winston = require("winston");

class UserTypeOnboardingController {

    constructor() {
        this.userService = new UserService();
        this.userTypeOnboardingValidator = new UserTypeOnboardingValidator();
        this.userTypeOnboardingService = new UserTypeOnboardingService();
    }

    render(req, res) {
        const preferences = req.user.preferences;
        res.render("onboarding/user-type-onboarding", { preferences })
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

    addPreferences(req, res, next) {
        const userId = req.user.id;
        const preferences = req.body["preferences"];

        this.userTypeOnboardingValidator.validateCreate(preferences)
            .then(preferences => this.userService.addPreferences(preferences, userId))
            .then(nothing => res.redirect("/onboarding/gym-type"))
            .catch(err => {
                winston.error("Failed to add preferences to user");
                next(err);
            });
    }
}

module.exports = UserTypeOnboardingController;
