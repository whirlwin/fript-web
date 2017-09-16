const UserTypePreferenceService = require('../../user/preference/UserTypePreferenceService');

class UserTypeOnboardingService {

    constructor() {
        this.userTypePreferenceService = new UserTypePreferenceService();
    }

    get(userId) {
        return this.userTypePreferenceService.get(userId)
    }

}

module.exports = UserTypeOnboardingService;
