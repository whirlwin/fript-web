const UserService = require('../user/UserService');
const OnboardingAssembler = require('./OnboardingAssembler');
const OnboardingService = require('./OnboardingService');
const winston = require('winston');
const ErrorCodes = require('../error/ErrorCodeEnum');

class OnboardingController {

    constructor() {
        this.userService = new UserService();
        this.onboardingService = new OnboardingService();
        this.onboardingAssembler = new OnboardingAssembler();
    }

    getUserTypeOnboarding(req, res, next) {
        const authHeader = req.headers.authorization;
        this.userService.getUserByAuthHeader(authHeader)
            .then(user => this.onboardingService.getUserOnboarding(user))
            .then(userOnboarding =>  res.json(userOnboarding))
            .catch(err => {
                winston.error("Failed to get user onboarding", err);
                res.status(500).json(ErrorCodes.getUserOnboarding);
            });
    }

    getGymTypeOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        this.userService.getUserByAuthHeader(authHeader)
            .then(user => this.onboardingService.getGymTypeOnboarding(user))
            .then(gymTypeOnboarding => this.onboardingAssembler.assembleGymTypeOnboarding(gymTypeOnboarding))
            .then(onboarding => res.send(onboarding))
            .catch(err => {
                winston.error("Failed to get gym type onboarding", err);
                res.status(500).json(ErrorCodes.getGym)
            });
    }

    getGymCenterOnboarding(req, res) {
        const authHeader = req.headers.authorization;
    }
}

module.exports = OnboardingController;
