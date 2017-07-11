const winston = require('winston');
const ErrorCodes = require('../../ErrorCodes');
const PendingMatchService = require('./PendingMatchService');
const Try = require('try-js');
const UserService = require('../../user/UserService');

class PendingMatchController {

    getPendingMatches(req, res) {
        /*
        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader()
        */

        const authHeader = req.headers.authorization;
        UserService.getInstance().getUserByAuthHeader(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => PendingMatchService.getInstance().getPendingMatches(user.id))
            .onSuccess(pendingMatches => res.send(pendingMatches))
            .onFailure(err =>  winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getPendingMatches));
    }
}

module.exports = PendingMatchController;
