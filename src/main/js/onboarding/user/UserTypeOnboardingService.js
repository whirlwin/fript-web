const UserTypePreferenceService = require('../../user/preference/UserTypePreferenceService');

class UserTypeOnboardingService {

    constructor() {
        this.gymCenterPreferenceService = new UserTypePreferenceService();
    }

    get(userId) {
        return this.gymCenterPreferenceService.get(userId)
    }

}

module.exports = UserTypeOnboardingService;
