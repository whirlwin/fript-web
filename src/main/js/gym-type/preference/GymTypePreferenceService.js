const GymTypePreferenceRepository = require('./GymTypePreferenceRepository');
const GymTypePreferenceValidator = require('./GymTypePreferenceValidator');

class GymTypePreferenceService {

    constructor() {
        this.gymTypePreferenceRepository = new GymTypePreferenceRepository();
        this.gymTypePreferenceValidator = new GymTypePreferenceValidator();
    }

    getGymTypePreferences(userId) {
        return this.gymTypePreferenceRepository.get(userId);
    }

    createPreferences(gymTypeIds, userId) {
        return this.gymTypePreferenceRepository.createPreferences(gymTypeIds, userId);
    }

    updatePreference(preference, userId) {
        return this.gymTypePreferenceValidator.validateUpdatePreference(preference)
            .flatMap(pref => this.gymTypePreferenceRepository.updatePreference(pref, userId));

    }
}

module.exports = GymTypePreferenceService;
