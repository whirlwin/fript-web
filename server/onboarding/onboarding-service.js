const GymTypeOnboardingService = require('./gym-type-onboarding-service');
const GymCenterOnboardingService = require('./gym-center-onboarding-service');

let instance;

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



    static getInstance() {
        if (instance == null) {
            instance = new OnboardingService();
        }
        return instance;
    }
}

module.exports = OnboardingService;