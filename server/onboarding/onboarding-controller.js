const UserService = require('../user/user-service');
const OnboardingService = require('./onboarding-service');

class OnboardingController {

    getGymTypePreferenceOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymTypePreferenceService.getInstance().getGymTypePreferences(user))
            .onSuccess(gymTypePreferences =>  res.json(gymTypePreferences))
            .onFailure(err => console.log(err))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymTypePreference));
    }

    getGymCenterPreferenceOnboarding(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymTypePreferenceService.getInstance().getGymTypePreferences(user))
            .filter(maybeUser => maybeUser.is)
    }
}

module.exports = OnboardingController;