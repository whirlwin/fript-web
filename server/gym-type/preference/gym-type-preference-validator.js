const Try = require('try-js');

class GymTypePreferenceValidator {

    validateCreatePreference(preference) {
        return Try.of(() => preference)
            .flatMap(pref => this.validateStatus(pref))
            .flatMap(pref => this.validateGymTypeId(pref));
    }

    validateUpdatePreference(preference) {
        return Try.of(() => preference)
            .flatMap(pref => this.validateStatus(pref))
            .flatMap(pref => this.validateGymTypeId(pref))
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