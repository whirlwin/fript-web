const GymTypeService = require('./../gym-type-service');
const GymTypePreferenceRepository = require('./gym-type-preference-repository');
const Try = require('try-js');

let instance;

class GymTypePreferenceService {

    constructor() {
        this.gymTypePreferenceRepository = new GymTypePreferenceRepository();
        this.gymTypeService = new GymTypeService();
    }

    getGymTypePreferences(user) {
        this.gymTypeService.get
        return this.gymTypePreferenceRepository.getGymTypePreferenceByUserId(user.id);
    }

    static getInstance() {
        if (instance == null) {
            instance = new GymTypePreferenceService();
        }
        return instance;
    }
}

module.exports = GymTypePreferenceService;