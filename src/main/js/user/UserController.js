const UserService = require("./UserService");
const UserValidator = require("./UserValidator");
const OnboardingStatusEnum = require("../onboarding/OnboardingStatusEnum");

class UserController {

    constructor() {
        this.userValidator = new UserValidator();
        this.userService = new UserService();
    }

    createUser(req, res) {
        this.userValidator.validateHasFacebookToken(req.query.facebookToken)
            .then(facebookToken => this.userService.createUser(facebookToken));
    }

    redirectAfterLogin(req, res) {
        if (UserController._hasCompletedOnboarding(req.user)) {
            res.redirect("/");
        } else {
            res.redirect("/onboarding/user");
        }
    }

    static _hasCompletedOnboarding(user) {
        return user.onboardingStatus === OnboardingStatusEnum.COMPLETED;
    }

        /*
        const facebookToken = req.body.facebookToken;
        this.userValidator.validateHasFacebookToken(facebookToken)
            .then(facebookToken => this.userService.logInWithFacebookToken(facebookToken))
            .then(user => res.json(user))
            .catch(err => {
                winston.error("Failed to log in user ", err);
                return res.status(500).json(ErrorCodes.login)
            });
            */
}

module.exports = UserController;
