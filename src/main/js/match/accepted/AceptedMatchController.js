const AcceptedMatchService = require('./AcceptedMatchService');

class AcceptedMatchController {

    acceptMatch(req, res) {
        const authHeader = req.headers.authorization;
        UserService.getInstance().tryGetUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => PendingMatchService.getInstance().getPendingMatches(user.id))
            .onSuccess(pendingMatches => res.send(pendingMatches))
            .onFailure(err => winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getGymCenterPreference));

    }
}

module.exports = AcceptedMatchController;
