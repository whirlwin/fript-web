const GymTypePreferenceRepository = require('./gym-type-preference-repository');

let instance;

class GymTypePreferenceService {

    constructor() {
        this.gymTypePreferenceRepository = new GymTypePreferenceRepository();
    }

    getGymTypePreferences(user) {
        return this.gymTypePreferenceRepository.getGymTypePreferenceByUserId(user.id);
    }

    getGymCenterPreferences(user) {

    }

    static getInstance() {
        if (instance == null) {
            instance = new GymTypePreferenceService();
        }
        return instance;
    }
}

module.exports = GymTypePreferenceService;