const CountryCodeConstants = require('./country-code-constants');
const Try = require('try-js');

let instance = null;

class GymService {

    getGymTypesByCountryCode(countryCode) {
        if (countryCode == CountryCodeConstants.no) {
            return Try.success([
                { id: 1, name: 'SATS ELIXIA' },
                { id: 2, name: 'Fresh Fitness' },
                { id: 3, name: 'SATS ELIXIA' }
            ]);
        } else {
            return Try.failure(new Error(`Could not find gym by country code ${countryCode}`));
        }
    }

    static getInstance() {
        if (instance === null) {
            instance = new GymService();
        }
        return instance;
    }
}

module.exports = GymService;