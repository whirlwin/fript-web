const UserTypePreferenceService = require("../../user/preference/UserTypePreferenceService");
const UserService = require("../../user/UserService");

class UserTypeOnboardingService {

    constructor() {
        this.userService = new UserService();
        this.userTypePreferenceService = new UserTypePreferenceService();
    }

    get(userId) {
        return this.userTypePreferenceService.get(userId)
    }
}

module.exports = UserTypeOnboardingService;
