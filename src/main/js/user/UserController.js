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

    renderProfilePage(req, res) {
        const user = req.user;
        res.render("user/profile", { user });
    }

    static _hasCompletedOnboarding(user) {
        return user.onboardingStatus === OnboardingStatusEnum.COMPLETED;
    }
}

module.exports = UserController;
