const UserPreferences = require("../../user/preference/UserPreferences");

class UserTypeOnboardingValidator {

    validateCreate(preferences) {
        for (const preference in preferences) {
            if (!(preference in UserPreferences)) {
                return Promise.reject("Preference is not in UserPreferences");
            }
        }
        return Promise.resolve(preferences);
    }
}

module.exports = UserTypeOnboardingValidator;
