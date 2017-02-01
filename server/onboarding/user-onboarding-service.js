const UserService = require('../user/user-service');

class UserOnboardingService  {

    constructor() {
        this.userService = new UserService();
    }

    getUserOnboarding(user) {
        return this.userService
    }
}

module.exports = UserOnboardingService;