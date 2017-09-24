const PendingMatchRepository = require('../MatchingRepository');

class PendingMatchService {

    constructor() {
        this.pendingMatchRepository = new PendingMatchRepository();
    }

    getPendingMatches(userId) {
        return this.pendingMatchRepository.getPendingMatches(userId);
    }

    getPendingMatch(pendingMatchId) {
        return this.pendingMatchRepository.getPendingMatch(pendingMatchId);
    }

    deletePendingMatch(pendingMatchId) {
        return this.pendingMatchRepository.deletePendingMatch(pendingMatchId);
    }
}

module.exports = PendingMatchService;
