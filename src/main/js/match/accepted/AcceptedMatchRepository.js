const DbProvider = require('../../DBProvider');

class AcceptedMatchRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    createAcceptedMatch({ userId, matchUserId }) {
        const sql = `INSERT INTO accepted_match(user_id, match_user_id)
                VALUES($(user_id), $(match_user_id))`;
        const params = {
            user_id: userId,
            match_user_id: matchUserId
        };
        this.db.query(sql, params);
    }
}

module.exports = AcceptedMatchRepository;