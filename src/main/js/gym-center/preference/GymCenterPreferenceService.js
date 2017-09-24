const GymCenterPreferenceRepository = require('./GymCenterPreferenceRepository');
const GymCenterPreferenceValidator = require('./GymCenterPreferenceValidator');

class GymCenterPreferenceService {

    constructor() {
        this.gymCenterPreferenceRepository = new GymCenterPreferenceRepository();
        this.gymCenterPreferenceValidator = new GymCenterPreferenceValidator();
    }

    get(userId) {
        return this.gymCenterPreferenceRepository.getPreferences(userId);
    }

    create(preference, user) {
        const userId = user.id;
        return this.gymCenterPreferenceValidator.validateCreatePreference(preference)
            .flatMap(pref => this.gymCenterPreferenceRepository.createPreference(preference, userId));
    }

    update(preference, user) {
        const userId = user.id;
        return this.gymCenterPreferenceValidator.validateUpdatePreference(preference)
            .flatMap(pref => this.gymCenterPreferenceRepository.updatePreference(preference, userId));
    }
}

module.exports = GymCenterPreferenceService;
