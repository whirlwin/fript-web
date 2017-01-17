const Try = require('try-js');

class GymTypePreferenceValidator {

    validateCreateGymTypePreference(createGymTypePreference) {
        return Try.of(() => createGymTypePreference)
            .filter(preference => preference.status === 'active' || preference.status === 'inactive');
    }
}

module.exports = GymTypePreferenceValidator;