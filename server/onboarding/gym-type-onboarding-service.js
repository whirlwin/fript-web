const GymTypeService = require('../gym-type/gym-type-service');
const GymTypePreferenceService = require('../gym-type/preference/gym-type-preference-service');

class GymTypeOnboardingService {

    constructor() {
        this.gymTypeService = new GymTypeService();
        this.gymTypePreferenceService = new GymTypePreferenceService();
    }

    getGymTypeOnboarding(user) {
        return this.gymTypeService.getGymTypes()
            .flatMap(types => this.gymTypePreferenceService.getPreferences(user));
    }
}

module.exports = GymTypeOnboardingService;