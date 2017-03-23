const AcceptedMatchRepository = require('./AcceptedMatchRepository');
const PendingMatchService = require('../pending/PendingMatchService');

class AcceptedMatchService {

    constructor() {
        this.acceptedMatchRepository = new AcceptedMatchRepository();
        this.pendingMatchService = new PendingMatchService();
    }

    acceptMatch(user, pendingMatchId) {
        this.pendingMatchService.getPendingMatch(pendingMatchId).then(pendingMatch => {
            this.acceptedMatchRepository.createAcceptedMatch();
            this.pendingMatchService.deletePendingMatch();
        });
    }
}

module.exports = AcceptedMatchService;