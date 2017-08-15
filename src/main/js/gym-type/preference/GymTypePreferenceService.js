const GymTypePreferenceRepository = require('./GymTypePreferenceRepository');
const GymTypePreferenceValidator = require('./GymTypePreferenceValidator');

let instance;

class GymTypePreferenceService {

    constructor() {
        this.gymTypePreferenceRepository = new GymTypePreferenceRepository();
        this.gymTypePreferenceValidator = new GymTypePreferenceValidator();
    }

    getGymTypePreferences(user) {
        return this.gymTypePreferenceRepository.getPreferencesByUserId(user.id);
    }

    createPreference(preference, user) {
        const userId = user.id;
        return this.gymTypePreferenceValidator.validateCreatePreference(preference)
            .flatMap(pref => this.gymTypePreferenceRepository.createPreference(pref, userId));
    }

    updatePreference(preference, user) {
        const userId = user.id;
        return this.gymTypePreferenceValidator.validateUpdatePreference(preference)
            .flatMap(pref => this.gymTypePreferenceRepository.updatePreference(pref, userId));

    }
}

module.exports = GymTypePreferenceService;
