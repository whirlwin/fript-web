const DbProvider = require('../../DBProvider');
const featureToggles = require('../../settings/FeatureToggles');
const Try = require('try-js');

class AcceptedMatchRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getAcceptedMatches({ userId }) {
        if (featureToggles.mockDb.enabled) {
            return Try.success([
                {
                    "user_id": "123",
                    "type": "pt"
                }
            ]);
        }
        const sql = `SELECT * FROM accepted_match
                WHERE user_id = $(user_id)`;
        const params = { user_id: userId };
        return Try.of(() => this.db.query(sql, params));

    }

    createAcceptedMatch({ userId, matchUserId }) {
        if (featureToggles.mockDb.enabled) {
            return Try.success();
        }

        const sql = `INSERT INTO accepted_match(user_id, match_user_id)
                VALUES($(user_id), $(match_user_id))`;
        const params = {
            user_id: userId,
            match_user_id: matchUserId
        };
        return Try.of(() => this.db.query(sql, params));
    }
}

module.exports = AcceptedMatchRepository;
