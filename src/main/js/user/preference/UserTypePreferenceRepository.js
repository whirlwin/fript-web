const DbProvider = require('../../DBProvider');

class UserTypePreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getUserTypePreference(userId) {
        const sql = `SELECT * FROM user_type_preference
            WHERE user_id = $(user_id)`;
        const params = { user_id: userId };
        return this.db.query(sql, params)
    }
}

module.exports = UserTypePreferenceRepository;
