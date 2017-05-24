const DbProvider = require('../../DBProvider');
const featureToggles = require('../../settings/feature-toggles');
const Optional = require('optional-js');
const Try = require('try-js');

class PendingMatchRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getPendingMatches(userId) {
        if (featureToggles.mockDb.enabled) {
            return Try.success([
                {
                    "id": "123"
                }
            ]);
        }

        const sql = `SELECT * FROM pending_match
                WHERE user_id = $(user_id)`;
        const params = { user_id: userId };
        return Try.of(() => this.db.query(sql, params));
    }

    getPendingMatch(pendingMatchId) {
        if (featureToggles.mockDb.enabled) {
            return Try.success(Optional.ofNullable({
                "id": "123"
            }));
        }

        const sql = `SELECT * FROM pending_match
                WHERE id = $(pending_match_id)`;
        const params = { pending_match_id: pendingMatchId };
        return Try.of(() => this.db.query(sql, params))
            .map(result => Optional.ofNullable(result));
    }

    deletePendingMatch(pendingMatchId) {
        if (featureToggles.mockDb.enabled) {
            return Try.success();
        }

        const sql = `DELETE FROM pending_match
                WHERE id = $(pending_match_id)`;
        const params = { pending_match_id: pendingMatchId };
        return this.db.query(sql, params);
    }
}

module.exports = PendingMatchRepository;
