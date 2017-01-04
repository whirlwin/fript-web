const GymTypeService = require('../gym-type/gym-type-service');
const GymTypePreferenceService = require('../gym-type/preference/gym-type-preference-service');
const UserService = require('../user/user-service');

class OnboardingController {

    constructor() {
        this.gymTypeService = new GymTypeService();
        this.gymTypePreferenceService = new GymTypePreferenceService();
        this.userService = new UserService();
    }

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

}

module.exports = OnboardingController;