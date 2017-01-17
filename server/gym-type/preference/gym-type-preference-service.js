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
        return this.gymTypePreferenceRepository.createGymTypePreference(createGymTypePreference, userId)
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymTypePreferenceService();
        }
        return instance;
    }
}

module.exports = GymTypePreferenceService;