const GymCenterPreferenceRepository = require('./gym-center-preference-repository');

let instance;

class GymCenterPreferenceService {

    constructor() {
        this.gymCenterPreferenceRepository = new GymCenterPreferenceRepository();
    }

    createGymCenterPreference(gymCenterPreference) {
        return this.gymCenterPreferenceRepository.createGymTypePreference(gymCenterPreference);
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymCenterPreferenceService();
        }
        return instance;
    }
}

module.exports = GymCenterPreferenceService;