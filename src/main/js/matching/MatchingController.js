const winston = require('winston');
const ErrorCodes = require('../error/ErrorCodeEnum');
const PendingMatchService = require('./pending/PendingMatchService');
const UserService = require('../user/UserService');

class MatchingController {

    constructor() {
        this.pendingMatchService = new PendingMatchService();
    }

    renderMainMatchingView(req, res) {
        const userId = req.user.id;
        this.pendingMatchService.getPendingMatches(userId)
            .then(pendingMatches => res.render("matching/main-matching", { pendingMatches: pendingMatches }))
            .catch(err => {
                console.log("err");
                res.render("")
            })

        /*
        const authHeader = req.headers.authorization;
        UserService.getInstance().resolveUser()
        */

        /*
        const authHeader = req.headers.authorization;
        UserService.getInstance().resolveUser(authHeader)
            .filter(maybeUser => maybeUser.isPresent())
            .map(maybeUser => maybeUser.get())
            .flatMap(user => PendingMatchService.getInstance().getPendingMatches(user.id))
            .onSuccess(pendingMatches => res.send(pendingMatches))
            .onFailure(err =>  winston.error(err))
            .onFailure(err => res.status(500).json(ErrorCodes.getPendingMatches));
            */
    }
}

module.exports = MatchingController;
