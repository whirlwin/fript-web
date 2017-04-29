const GymCenterPreferenceRepository = require('./GymCenterPreferenceRepository');
const GymCenterPreferenceValidator = require('./GymCenterPreferenceValidator');

let instance;

class GymCenterPreferenceService {

    constructor() {
        this.gymCenterPreferenceRepository = new GymCenterPreferenceRepository();
        this.gymCenterPreferenceValidator = new GymCenterPreferenceValidator();
    }

    getPreferences(userId) {
        return this.gymCenterPreferenceRepository.getPreferences(userId);
    }

    createPreference(preference, user) {
        const userId = user.id;
        return this.gymCenterPreferenceValidator.validateCreatePreference(preference)
            .flatMap(pref => this.gymCenterPreferenceRepository.createPreference(preference, userId));
    }

    updatePreference(preference, user) {
        const userId = user.id;
        return this.gymCenterPreferenceValidator.validateUpdatePreference(preference)
            .flatMap(pref => this.gymCenterPreferenceRepository.updatePreference(preference, userId));
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymCenterPreferenceService();
        }
        return instance;
    }
}

module.exports = GymCenterPreferenceService;