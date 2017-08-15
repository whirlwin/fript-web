const UserService = require('../user/UserService');

class UserOnboardingService  {

    constructor() {
        this.userService = new UserService();
    }

    getUserOnboarding(user) {
        return null;
    }
}

module.exports = UserOnboardingService;
