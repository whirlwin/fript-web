const UserService = require('../user/user-service');
const OnboardingAssembler = require('./onboarding-assembler');
const OnboardingService = require('./onboarding-service');
const winston = require('winston');
const ErrorCodes = require('../error-codes');

class OnboardingController {

    getGymTypeOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => OnboardingService.getInstance().getGymTypeOnboarding(user))
            .map(gymTypeOnboarding => OnboardingAssembler.getInstance().assembleGymTypeOnboarding(gymTypeOnboarding))
            .onSuccess(gymTypePreferences =>  res.send(gymTypePreferences))
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
            .filter(maybeUser => maybeUser.is)
    }

    getUserOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => OnboardingService.getInstance().getGymCenterOnboarding(user))
    }
}

module.exports = OnboardingController;