const UserTypePreferenceRepository = require('./UserTypePreferenceRepository');

class UserTypePreferenceService {

    constructor() {
        this.userTypePreferenceRepository = new UserTypePreferenceRepository();
    }

    get(userId) {
        return this.userTypePreferenceRepository.get(userId);
    }
}

module.exports = UserTypePreferenceService;
