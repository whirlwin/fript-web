const Try = require('try-js');

class GymTypePreferenceValidator {

    validateCreateGymTypePreference(createGymTypePreference) {
        return Try.of(() => createGymTypePreference)
            .flatMap(preference => this.validateStatus(preference));
    }

    validateStatus(preference) {
        if (preference.status === 'active' || preference.status === 'inactive') {
            return Try.failure('Invalid preference status');
        } else {
            return Try.success(preference);
        }
    }
}

module.exports = GymTypePreferenceValidator;