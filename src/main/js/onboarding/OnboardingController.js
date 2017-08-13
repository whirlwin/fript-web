const UserService = require('../user/UserService');
const OnboardingAssembler = require('./OnboardingAssembler');
const OnboardingService = require('./OnboardingService');
const winston = require('winston');
const ErrorCodes = require('../error/ErrorCodes');

class OnboardingController {

    constructor() {
        this.userService = new UserService();
        this.onboardingService = new OnboardingService();
    }

    getUserTypeOnboarding(req, res, next) {
        const authHeader = req.headers.authorization;
        this.userService.getUserByAuthHeader(authHeader)
            .then(user => this.onboardingService.getUserOnboarding(user))
            .then(userOnboarding =>  res.json(userOnboarding))
            .catch(err => {
                winston.error("Failed to get user onboarding ", err);
                res.status(500).json(ErrorCodes.getUserOnboarding);
            });
    }

    getGymTypeOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        this.userService.getUserByAuthHeader(authHeader);
    }

    getGymCenterOnboarding(req, res) {
        const authHeader = req.headers.authorization;
    }

    getGymTypeOnboardingOld(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => OnboardingService.getInstance().getGymTypeOnboarding(user))
            .map(gymTypeOnboarding => OnboardingAssembler.getInstance().assembleGymTypeOnboarding(gymTypeOnboarding))
            .onSuccess(onboarding =>  res.send(onboarding))
            .onFailure(err => console.log(err))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymTypePreference));
    }

    // TODO: Finish
    getGymCenterOnboardingOld(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => OnboardingService.getInstance().getGymCenterOnboarding(user))
            .onSuccess(onboarding => res.send(onboarding))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymCenterPreference))
    }

    getUserOnboardingOld(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => OnboardingService.getInstance().getUserOnboarding(user))
            .onSuccess(onboarding =>  res.send(onboarding))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getU))
    }
}

module.exports = OnboardingController;
