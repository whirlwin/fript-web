const AcceptedMatchRepository = require('./AcceptedMatchRepository');
const PendingMatchService = require('../pending/PendingMatchService');

let instance;

class AcceptedMatchService {

    constructor() {
        this.acceptedMatchRepository = new AcceptedMatchRepository();
        this.pendingMatchService = new PendingMatchService();
    }

    acceptMatch(userId, pendingMatchId) {
        return this.pendingMatchService.getPendingMatch(pendingMatchId)
            .flatMap(pendingMatch => this.acceptedMatchRepository.createAcceptedMatch({ userId: userId, matchUserId: pendingMatch.user_id}))
            .flatMap(ignored => this.pendingMatchService.deletePendingMatch(pendingMatchId));
    }

    static getInstance() {
        if (instance == null) {
            instance = new AcceptedMatchService();
        }
        return instance;
    }
}

module.exports = AcceptedMatchService;
