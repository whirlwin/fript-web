const _ = require('lodash');
const DbProvider = require('../../db-provider');
const Try = require('try-js');

class GymTypePreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymTypePreferenceByUserId(userId) {
        const sql = `SELECT *
                FROM gym_type_preference gtp
                INNER JOIN gym_type gt ON gt.id = gtp.gym_type_id
                WHERE gtp.user_id = $(user_id)`;
        const params = { user_id: userId };
        const result = this.db.query(sql, params);
        return Try.of(() => result);
    }

    createGymTypePreference(gymTypeId, userId) {
        const sql = `INSERT INTO gym_type_preference(gym_type_id, user_id)
                VALUES($(gym_type_id), $(user_id))
                ON CONFLICT(id) DO NOTHING`;
        const params = {
            gym_type_id: gymTypeId,
            user_id: userId
        };
        const result = this.db.query(sql, params);
        return Try.of(() => result);
    }
}

module.exports = GymTypePreferenceRepository;