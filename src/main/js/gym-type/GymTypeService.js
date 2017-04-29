const CountryCodeConstants = require('./CountryCodeConstants');
const GymTypeRepository = require('./GymTypeRepository');

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