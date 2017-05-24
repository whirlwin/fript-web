const AcceptedMatchService = require('./AcceptedMatchService');
const UserService = require('../../user/UserService');
const winston = require('winston');

class AcceptedMatchController {

    acceptMatch(req, res) {
        const authHeader = req.headers.authorization;
        const pendingMatchId = req.body.pendingMatchId;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => AcceptedMatchService.getInstance().acceptMatch(user.id, pendingMatchId))
            .onSuccess(pendingMatches => res.send(pendingMatches))
            .onFailure(err =>  winston.error(err.err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymCenterPreference));

    }
}

module.exports = AcceptedMatchController;
