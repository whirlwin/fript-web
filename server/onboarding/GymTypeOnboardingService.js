const GymTypeService = require('../gym-type/gym-type-service');
const GymTypePreferenceService = require('../gym-type/preference/gym-type-preference-service');

class GymTypeOnboardingService {

    constructor() {
        this.gymTypeService = new GymTypeService();
        this.gymTypePreferenceService = new GymTypePreferenceService();
    }

    getGymTypeOnboarding(user) {
        return this.gymTypeService.getGymTypes()
            .flatMap(types => this.gymTypePreferenceService.getGymTypePreferences(user)
                .map(prefs => this.combineTypeAndPrefs(types, prefs)));
    }

    combineTypeAndPrefs(types, prefs) {
        return types.map(type => {
            type.hasPreference = this.hasPreference(type, prefs);
            return type;
        });
    }

    hasPreference(gymType, preferences) {
        return preferences.some(pref => gymType.id === pref.gym_type_id);
    }
}

module.exports = GymTypeOnboardingService;