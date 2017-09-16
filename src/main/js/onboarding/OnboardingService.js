const GymTypeOnboardingService = require('./GymTypeOnboardingService');
const GymCenterOnboardingService = require('./GymCenterOnboardingService');

class OnboardingService {

    constructor() {
        this.gymTypeOnboardingService = new GymTypeOnboardingService();
        this.gymCenterOnboardingService = new GymCenterOnboardingService();
    }

    getGymTypeOnboarding(user) {
        return this.gymTypeOnboardingService.getGymTypeOnboarding(user);
    }

    getGymCenterOnboarding(user) {
        return this.gymCenterOnboardingService.getGymCenterOnboarding(user);
    }
}

module.exports = OnboardingService;
