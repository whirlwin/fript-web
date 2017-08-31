const UserTypePreferenceRepository = require('./UserTypePreferenceRepository');

class UserTypePreferenceService {

    constructor() {
        this.userTypePreferenceRepository = new UserTypePreferenceRepository();
    }

    getUserTypePreference(userId) {
        return this.userTypePreferenceRepository.getUserTypePreference(userId);
    }
}

module.exports = UserTypePreferenceService;
