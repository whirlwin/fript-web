const GymTypeOnboardingService = require('./GymTypeOnboardingService');
const GymCenterOnboardingService = require('./GymCenterOnboardingService');
const UserTypeOnboardingService = require('./UserTypeOnboardingService');

class OnboardingService {

    constructor() {
        this.gymTypeOnboardingService = new GymTypeOnboardingService();
        this.gymCenterOnboardingService = new GymCenterOnboardingService();
        this.userTypeOnboardingService = new UserTypeOnboardingService();
    }

    getUserTypeOnboarding(user) {
        return this.userTypeOnboardingService.getUserTypeOnboarding(user);
    }

    getGymTypeOnboarding(user) {
        return this.gymTypeOnboardingService.getGymTypeOnboarding(user);
    }

    getGymCenterOnboarding(user) {
        return this.gymCenterOnboardingService.getGymCenterOnboarding(user);
    }
}

module.exports = OnboardingService;
