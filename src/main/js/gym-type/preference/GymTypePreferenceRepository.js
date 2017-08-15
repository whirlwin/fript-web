const _ = require('lodash');
const DbProvider = require('../../DBProvider');
const Try = require('try-js');

class GymTypePreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getPreferencesByUserId(userId) {
        const sql = `SELECT *
                FROM gym_type_preference gtp
                INNER JOIN gym_type gt ON gt.id = gtp.gym_type_id
                WHERE gtp.user_id = $(user_id)`;
        const params = { user_id: userId };
        return this.db.query(sql, params);
    }

    createPreference(preference, userId) {
        const sql = `INSERT INTO gym_type_preference (gym_type_id, user_id, status)
                VALUES($(gym_type_id), $(user_id), $(status))
                ON CONFLICT (id)
                DO NOTHING`;
        const params = {
            gym_type_id: preference.gymTypeId,
            user_id: userId,
            status: preference.status
        };
        const result = this.db.query(sql, params);
        return Try.of(() => result);
    }

    updatePreference(preference, userId) {
        const sql = `UPDATE gym_type_preference 
                SET status = $(status)
                WHERE gym_type_id = $(gym_type_id)
                AND user_id = $(user_id)`;
        const params = {
            gym_type_id: preference.gymTypeId,
            user_id: userId,
            status: preference.status
        };
        const result = this.db.query(sql, params);
        return Try.of(() => result);
    }
}

module.exports = GymTypePreferenceRepository;
