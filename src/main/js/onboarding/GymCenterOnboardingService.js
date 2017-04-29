const GymCenterService = require('../gym-center/GymCenterService');
const GymCenterPreferenceService = require('../gym-center/preference/GymCenterPreferenceService');

class GymCenterOnboardingService {

    constructor() {
        this.gymCenterService = new GymCenterService();
        this.gymCenterPreferenceService = new GymCenterPreferenceService();
    }

    getGymCenterOnboarding(user) {
        this.gymCenterService.getGymCenters()
            .flatMap(centers => this.gymCenterPreferenceService.getPreferences(user))
    }
}

module.exports = GymCenterOnboardingService;