const GymTypePreferenceRepository = require('./GymTypePreferenceRepository');
const GymTypePreferenceValidator = require('./GymTypePreferenceValidator');

let instance;

class GymTypePreferenceService {

    constructor() {
        this.gymTypePreferenceRepository = new GymTypePreferenceRepository();
        this.gymTypePreferenceValidator = new GymTypePreferenceValidator();
    }

    getPreferences(user) {
        const userId = user.id;
        return this.gymTypePreferenceRepository.getPreferencesByUserId(userId);
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

    static getInstance() {
        if (instance == null) {
            instance = new GymTypePreferenceService();
        }
        return instance;
    }
}

module.exports = GymTypePreferenceService;