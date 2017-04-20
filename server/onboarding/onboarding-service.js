const GymTypeOnboardingService = require('./GymTypeOnboardingService');
const GymCenterOnboardingService = require('./GymCenterOnboardingService');
const UserOnboardingService = require('./user-onboarding-service');

let instance;

class OnboardingService {

    constructor() {
        this.gymTypeOnboardingService = new GymTypeOnboardingService();
        this.gymCenterOnboardingService = new GymCenterOnboardingService();
        this.userOnboardingService = new UserOnboardingService();
    }

    getGymTypeOnboarding(user) {
        return this.gymTypeOnboardingService.getGymTypeOnboarding(user);
    }

    getGymCenterOnboarding(user) {
        return this.gymCenterOnboardingService.getGymCenterOnboarding(user);
    }

    getUserOnboarding(user) {
        console.log('foobar');
        return this.userOnboardingService.getUserOnboarding(user);
    }

    static getInstance() {
        if (instance == null) {
            instance = new OnboardingService();
        }
        return instance;
    }
}

module.exports = OnboardingService;