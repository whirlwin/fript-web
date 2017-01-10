const GymTypePreferenceRepository = require('./gym-type-preference-repository');

let instance;

class GymTypePreferenceService {

    constructor() {
        this.gymTypePreferenceRepository = new GymTypePreferenceRepository();
    }

    getGymTypePreferences(user) {
        const userId = user.id;
        return this.gymTypePreferenceRepository.getGymTypePreferenceByUserId(userId);
    }

    createGymTypePreference(gymTypeId, user) {
        const userId = user.id;
        return this.gymTypePreferenceRepository.createGymTypePreference(gymTypeId, userId)
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymTypePreferenceService();
        }
        return instance;
    }
}

module.exports = GymTypePreferenceService;