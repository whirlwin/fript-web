const GymTypeOnboardingService = require('./GymTypeOnboardingService');
const GymCenterOnboardingService = require('./GymCenterOnboardingService');
const UserOnboardingService = require('./UserOnboardingService');

class OnboardingService {

    constructor() {
        this.gymTypeOnboardingService = new GymTypeOnboardingService();
        this.gymCenterOnboardingService = new GymCenterOnboardingService();
        this.userOnboardingService = new UserOnboardingService();
    }

    getUserOnboarding(user) {
        return this.userOnboardingService.getUserOnboarding(user);
    }

    getGymTypeOnboarding(user) {
        return this.gymTypeOnboardingService.getGymTypeOnboarding(user);
    }

    getGymCenterOnboarding(user) {
        return this.gymCenterOnboardingService.getGymCenterOnboarding(user);
    }
}

module.exports = OnboardingService;
