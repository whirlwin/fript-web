const GymCenterService = require('../gym-center/gym-center-service');
const GymCenterPreferenceService = require('../gym-center/preference/gym-center-preference-service');

class GymCenterOnboardingService {

    constructor() {
        this.gymCenterService = new GymCenterService();
        this.gymCenterPreferenceService = new GymCenterPreferenceService();
    }

    getGymCenterOnboarding(user) {
        this.gymCenterService.getGymCenters()
            .flatMap(centers => this.gymCenterPreferenceService.)
    }
}

module.exports = GymCenterOnboardingService;