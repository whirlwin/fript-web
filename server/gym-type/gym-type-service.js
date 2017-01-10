const CountryCodeConstants = require('./country-code-constants');
const GymTypeRepository = require('./gym-type-repository');

let instance = null;

class GymTypeService {

    constructor() {
        this.gymTypeRepository = new GymTypeRepository();
    }

    getGymTypes() {
        return this.gymTypeRepository.getGymTypes();
    }

    static getInstance() {
        if (instance === null) {
            instance = new GymTypeService();
        }
        return instance;
    }
}

module.exports = GymTypeService;