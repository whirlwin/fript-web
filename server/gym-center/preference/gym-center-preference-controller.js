const ErrorCodes = require('../../error-codes');
const GymCenterPreferenceService = require('./gym-center-preference-service');
const UserService = require('../../user/user-service');
const winston = require('winston');

class GymCenterPreferenceController {

    createPreference(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymCenterPreferenceService.getInstance().createPreference())
            .onSuccess(nothing => res.json())
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.createGymCenterPreference))
    }

    updatePreference(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymCenterPreferenceService.getInstance().updatePreference())
            .onSuccess(nothing => res.json())
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.updateGymCenterPreference))
    }

}

module.exports = GymCenterPreferenceController;