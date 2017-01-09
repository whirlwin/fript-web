const GymTypeService = require('../gym-type/gym-type-service');
const GymTypePreferenceService = require('../gym-type/preference/gym-type-preference-service');

let instance;

class GymTypeOnboardingService {

    constructor() {
        this.gymTypeService = new GymTypeService();
        this.gymTypePreferenceService = new GymTypePreferenceService();
    }

    getGymTypeOnboarding(user) {
        this.gymTypeService.getGymTypes()
            .onSuccess(value => console.log(value));
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymTypeOnboardingService();
        }
    }
}

module.exports = GymTypeOnboardingService;