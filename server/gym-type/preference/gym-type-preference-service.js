const GymTypePreferenceRepository = require('./gym-type-preference-repository');
const GymTypePreferenceValidator = require('./gym-type-preference-validator');

let instance;

class GymTypePreferenceService {

    constructor() {
        this.gymTypePreferenceRepository = new GymTypePreferenceRepository();
        this.gymTypePreferenceValidator = new GymTypePreferenceValidator();
    }

    getGymTypePreferences(user) {
        const userId = user.id;
        return this.gymTypePreferenceRepository.getGymTypePreferenceByUserId(userId);
    }

    createGymTypePreference(createGymTypePreference, user) {
        const userId = user.id;
        return this.gymTypePreferenceValidator.validateCreateGymTypePreference(createGymTypePreference)
            .map(preference => preference.gymTypeId)
            .flatMap(gymTypeId => this.gymTypePreferenceRepository.createGymTypePreference(gymTypeId, userId));
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymTypePreferenceService();
        }
        return instance;
    }
}

module.exports = GymTypePreferenceService;