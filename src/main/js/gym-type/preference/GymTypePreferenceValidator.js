class GymTypePreferenceValidator {

    validateCreatePreference(preference) {
        return Try.of(() => preference)
            .flatMap(pref => this._validateStatus(pref))
            .flatMap(pref => this._validateGymTypeId(pref));
    }

    validateUpdatePreference(preference) {
        return Try.of(() => preference)
            .flatMap(pref => this._validateStatus(pref))
            .flatMap(pref => this._validateGymTypeId(pref))
    }

    _validateStatus(preference) {
        if (preference.status === 'active' || preference.status === 'inactive') {
            return Try.success(preference);
        } else {
            return Try.failure(`Invalid gym type preference status: ${preference.status}`);
        }
    }

    _validateGymTypeId(preference) {
        if (typeof preference.gymTypeId !== 'undefined') {
            return Try.success(preference);
        } else {
            return Try.failure('gymTypeId is not defined');
        }
    }
}

module.exports = GymTypePreferenceValidator;
