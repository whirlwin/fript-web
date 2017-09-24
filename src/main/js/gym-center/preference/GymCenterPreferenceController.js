const ErrorCodes = require('../../error/ErrorCodeEnum');
const GymCenterPreferenceService = require('./GymCenterPreferenceService');
const UserService = require('../../user/UserService');
const winston = require('winston');

class GymCenterPreferenceController {

    createPreference(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().resolveUser(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymCenterPreferenceService.getInstance().createPreference())
            .onSuccess(nothing => res.json())
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.createGymCenterPreference))
    }

    updatePreference(req, res) {
        const authHeader = req.headers.authorization;
        const preference = {
            gymCenterId: req.body.gymCenterId,
            status: req.body.status
        };
        UserService.getInstance().resolveUser(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => GymCenterPreferenceService.getInstance().updatePreference(preference, user))
            .onSuccess(nothing => res.json())
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.updateGymCenterPreference))
    }
}

module.exports = GymCenterPreferenceController;
