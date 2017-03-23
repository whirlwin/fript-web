const PendingMatchRepository = require('./PendingMatchRepository');

let instance;

class PendingMatchService {

    constructor() {
        this.pendingMatchRepository = new PendingMatchRepository();
    }

    getPendingMatches(userId) {
        return this.pendingMatchRepository.getPendingMatches(userId);
    }

    getPendingMatch(pendingMatchId) {
        return this.pendingMatchRepository.get
    }

    deletePendingMatch(pendingMatchId) {
        return this.pendingMatchRepository.deletePendingMatch(pendingMatchId);
    }

    static getInstance() {
        if (instance == null)  {
            instance = new PendingMatchService();
        }
        return instance;
    }
}

module.exports = PendingMatchService;