const UserPreferences = require("../../user/preference/UserPreferences");

class UserTypeOnboardingValidator {

    validateCreate(preferences) {
        for (const preference of preferences) {
            if (!(preference in UserPreferences)) {
                return Promise.reject(`Preference ${preference} is not in UserPreferences`);
            }
        }
        return Promise.resolve(preferences);
    }
}

module.exports = UserTypeOnboardingValidator;
