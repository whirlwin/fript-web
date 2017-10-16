const GymCenterService = require('../../gym-center/GymCenterService');
const GymCenterPreferenceService = require('../../gym-center/preference/GymCenterPreferenceService');

class GymCenterOnboardingService {

    constructor() {
        this.gymCenterService = new GymCenterService();
        this.userTypePreferenceService = new GymCenterPreferenceService();
    }

    get(userId) {
        return this.gymCenterService.get()
            .then(gymCenters => this._getAndCombineGymCenterPreferences(gymCenters, userId));
    }

    _getAndCombineGymCenterPreferences(gymCenters, userId) {
        return this.userTypePreferenceService.get(userId)
            .then(gymTypePreferences =>
                gymCenters.map(gymType => {
                    gymType.hasPreference = this._hasPreference(gymType, gymTypePreferences);
                    return gymType
                })
            )
    }

    _hasPreference(gymType, gymPreferences) {
        return gymPreferences.some(pref => gymType.id === pref.gym_type_id);
    }

}

module.exports = GymCenterOnboardingService;
