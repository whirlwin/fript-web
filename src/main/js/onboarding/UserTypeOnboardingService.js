const UserService = require('../user/UserService');
const UserTypePreferenceService = require('../user/preference/UserTypePreferenceRepository');

class UserTypeOnboardingService  {

    constructor() {
        this.userService = new UserService();
        this.userTypePreferenceService = new UserTypePreferenceService();
    }

    getUserTypeOnboarding(user) {
        return this.userTypePreferenceService.getUserTypePreference(user.id);
    }
}

module.exports = UserTypeOnboardingService;
