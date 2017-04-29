const Try = require('try-js');

class GymCenterPreferenceValidator {

    validateCreatePreference(preference) {
        return Try.of(() => preference)
            .flatMap(pref => this._validateStatus(pref))
            .flatMap(pref => this._validateGymCenterId(pref));
    }

    validateUpdatePreference(preference) {
        return Try.of(() => preference)
            .flatMap(pref => this._validateStatus(pref))
            .flatMap(pref => this._validateGymCenterId(pref));
    }

    _validateStatus(preference) {
        if (preference.status === 'active' || preference.status === 'inactive') {
            return Try.success(preference);
        } else {
            return Try.failure(`Invalid gym center preference: ${preference.status}`);
        }
    }

    _validateGymCenterId(preference) {
        if (typeof preference.gymCenterId !== 'undefined') {
            return Try.success(preference);
        } else {
            return Try.failure(`Invalid gym center id: ${preference.gymCenterId}`);
        }
    }
}

module.exports = GymCenterPreferenceValidator;
