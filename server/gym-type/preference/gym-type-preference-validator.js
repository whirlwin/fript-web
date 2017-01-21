const Try = require('try-js');

class GymTypePreferenceValidator {

    validateCreateGymTypePreference(createGymTypePreference) {
        return Try.of(() => createGymTypePreference)
            .flatMap(preference => this.validateStatus(preference))
            .flatMap(preference => this.validateGymTypeId(preference));
    }

    validateStatus(preference) {
        if (preference.status === 'active' || preference.status === 'inactive') {
            return Try.success(preference);
        } else {
            return Try.failure('Invalid preference status');
        }
    }

    validateGymTypeId(preference) {
        if (typeof preference.gymTypeId !== "undefined") {
            return Try.success(preference);
        } else {
            return Try.failure('gymTypeId is not defined');
        }
    }
}

module.exports = GymTypePreferenceValidator;