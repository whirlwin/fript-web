const ErrorCodes = require('../../error-codes');
const GymTypePreferenceService = require('./gym-type-preference-service');
const UserService = require('../../user/user-service');
const winston = require('winston');

class GymTypePreferenceController {

    getGymTypePreferences(req, res) {
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

    createGymTypePreference(req, res) {
        const authHeader = req.headers.authorization;
        const gymTypeId = req.body.gymTypeId;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymTypePreferenceService.getInstance().createGymTypePreference(gymTypeId, user))
            .onSuccess(nothing => res.json())
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.createGymTypePreference))
    }
}

module.exports = GymTypePreferenceController;