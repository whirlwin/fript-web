const DbProvider = require('../../DBProvider');

class PendingMatchRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getPendingMatches(userId) {
        const sql = `SELECT * FROM pending_match
                WHERE user_id = $(user_id)`;
        const params = { user_id: userId };
        return this.db.query(sql, params)
    }

    getPendingMatch(pendingMatchId) {
        const sql = `SELECT * FROM pending_match
                WHERE id = $(pending_match_id)`;
        const params = { pending_match_id: pendingMatchId };
        return this.db.query(sql, params);
    }

    deletePendingMatch(pendingMatchId) {
        const sql = `DELETE FROM pending_match
                WHERE id = $(pending_match_id)`;
        const params = { pending_match_id: pendingMatchId };
        return this.db.query(sql, params);
    }
}

module.exports = PendingMatchRepository;