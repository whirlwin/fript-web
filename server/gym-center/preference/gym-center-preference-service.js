const GymCenterPreferenceRepository = require('./gym-center-preference-repository');
const GymCenterPreferenceValidator = require('./gym-center-preference-validator');

let instance;

class GymCenterPreferenceService {

    constructor() {
        this.gymCenterPreferenceRepository = new GymCenterPreferenceRepository();
        this.gymCenterPreferenceValidator = new GymCenterPreferenceValidator();
    }

    createPreference(preference) {
        return this.gymCenterPreferenceValidator.validateCreatePreference(preference)
            .flatMap(pref => this.gymCenterPreferenceRepository.createPreference(preference));
    }

    updatePreference(preference) {
        return this.gymCenterPreferenceValidator.validateUpdatePreference(preference)
            .flatMap(pref => this.gymCenterPreferenceRepository.updatePreference(preference));
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymCenterPreferenceService();
        }
        return instance;
    }
}

module.exports = GymCenterPreferenceService;