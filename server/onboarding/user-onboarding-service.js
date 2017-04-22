const UserService = require('../user/UserService');

class UserOnboardingService  {

    constructor() {
        this.userService = new UserService();
    }

    getUserOnboarding(user) {
        return this.userService
    }
}

module.exports = UserOnboardingService;