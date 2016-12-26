const CountryCodeConstants = require('./country-code-constants');
const Try = require('try-js');

let instance = null;

class GymTypeService {

    getGymTypes() {

    }

    static getInstance() {
        if (instance === null) {
            instance = new GymTypeService();
        }
        return instance;
    }
}

module.exports = GymTypeService;