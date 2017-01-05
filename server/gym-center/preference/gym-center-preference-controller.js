const GymCenterPreferenceService = require('./gym-center-preference-service');

class GymCenterPreferenceController {

    createGymCenterPreference(req, res) {
        GymCenterPreferenceService.getInstance().createGymCenterPreferences();
    }

}

module.exports = GymCenterPreferenceController;