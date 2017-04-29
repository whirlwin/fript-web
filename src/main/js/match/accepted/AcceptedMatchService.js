const AcceptedMatchRepository = require('./AcceptedMatchRepository');
const PendingMatchService = require('../pending/PendingMatchService');

let instance;

class AcceptedMatchService {

    constructor() {
        this.acceptedMatchRepository = new AcceptedMatchRepository();
        this.pendingMatchService = new PendingMatchService();
    }

    acceptMatch(user, pendingMatchId) {
        this.pendingMatchService.getPendingMatch(pendingMatchId).then(pendingMatch => {
            this.acceptedMatchRepository.createAcceptedMatch({ userId: user.id, matchUserId: pendingMatch.user_id});
            this.pendingMatchService.deletePendingMatch();
        });
    }

    static getInstance() {
        if (instance == null) {
            instance = new AcceptedMatchService();
        }
        return instance;
    }
}

module.exports = AcceptedMatchService;