const ErrorCodes = require('../../error-codes');
const GymTypePreferenceService = require('./gym-type-preference-service');
const UserService = require('../../user/user-service');
const winston = require('winston');

class GymTypePreferenceController {

    getPreferences(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymTypePreferenceService.getInstance().getPreferences(user))
            .onSuccess(gymTypePreferences =>  res.json(gymTypePreferences))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymTypePreference));
    }

    createPreference(req, res) {
        const authHeader = req.headers.authorization;
        const preference = {
            gymTypeId: req.body.gymTypeId,
            status: req.body.status
        };
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymTypePreferenceService.getInstance().createPreference(preference, user))
            .onSuccess(nothing => res.json())
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.createGymTypePreference))
    }

    updatePreference(req, res) {
        const authHeader = req.headers.authorization;
        const preference = {
            gymTypeId: req.body.gymTypeId,
            status: req.body.status
        };
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymTypePreferenceService.getInstance().updatePreference(preference, user))
            .onSuccess(nothing => res.json())
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.updateGymTypePreference))
    }
}

module.exports = GymTypePreferenceController;