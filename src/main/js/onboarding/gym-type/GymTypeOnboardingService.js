const GymTypeService = require('../../gym-type/GymTypeService');
const GymTypePreferenceService = require('../../gym-type/preference/GymTypePreferenceService');

class GymTypeOnboardingService {

    constructor() {
        this.gymCenterService = new GymTypeService();
        this.userTypePreferenceService = new GymTypePreferenceService();
    }

    get(userId) {
        return this.gymCenterService.getGymTypes()
            .then(gymTypes => this._getAndCombineGymTypePreferences(gymTypes, userId));
    }

    _getAndCombineGymTypePreferences(gymTypes, userId) {
        return this.userTypePreferenceService.getGymTypePreferences(userId)
            .then(gymTypePreferences =>
                gymTypes.map(gymType => {
                    gymType.hasPreference = this._hasPreference(gymType, gymTypePreferences);
                    return gymType
                })
            )
    }

    _hasPreference(gymType, gymPreferences) {
        return gymPreferences.some(pref => gymType.id === pref.gym_type_id);
    }

}

module.exports = GymTypeOnboardingService;
