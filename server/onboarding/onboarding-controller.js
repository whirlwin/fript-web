const UserService = require('../user/user-service');
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
            .onSuccess(gymTypePreferences =>  res.json(gymTypePreferences))
            .onFailure(err => console.log(err))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymTypePreference));
    }

    getGymCenterOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => OnboardingService.getInstance().getGymCenterOnboarding(user))
            .filter(maybeUser => maybeUser.is)
    }
}

module.exports = OnboardingController;