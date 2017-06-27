const UserService = require('../user/UserService');
const OnboardingAssembler = require('./OnboardingAssembler');
const OnboardingService = require('./OnboardingService');
const winston = require('winston');
const ErrorCodes = require('../ErrorCodes');

class OnboardingController {

    getGymTypeOnboarding(req, res) {
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
    getGymCenterOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => OnboardingService.getInstance().getGymCenterOnboarding(user))
            .onSuccess(onboarding => res.send(onboarding))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymCenterPreference))
    }

    getUserOnboarding(req, res) {
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
