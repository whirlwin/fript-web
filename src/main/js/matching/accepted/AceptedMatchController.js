const AcceptedMatchService = require('./AcceptedMatchService');
const UserService = require('../../user/UserService');
const winston = require('winston');

class AcceptedMatchController {

    getAcceptedMatches(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().resolveUser(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => AcceptedMatchService.getInstance().getAcceptedMatches(user.id))
            .onSuccess(pendingMatches => res.send(pendingMatches))
            .onFailure(err =>  winston.error(err.err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymCenterPreference));
    }

    acceptMatch(req, res) {
        const authHeader = req.headers.authorization;
        const pendingMatchId = req.body.pendingMatchId;
        UserService.getInstance().resolveUser(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => AcceptedMatchService.getInstance().acceptMatch(user.id, pendingMatchId))
            .onSuccess(pendingMatches => res.send(pendingMatches))
            .onFailure(err =>  winston.error(err.err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymCenterPreference));

    }
}

module.exports = AcceptedMatchController;
