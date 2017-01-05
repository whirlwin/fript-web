const _ = require('lodash');
const DbProvider = require('../../db-provider');
const Try = require('try-js');

class GymCenterPreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymCenterPreferences(userId) {
        const sql = `SELECT *
                FROM gym_center_preference gcp
                WHERE user_id = $(user_id)`;
        const params = { user_id: userId };
        this.db.query(sql, params);
        return Try.of(() => this.db.query(sql, params));
    }

    createGymTypePreference(gymTypePreference) {
        const sql = `INSERT INTO gym_center_preference ()
                VALUES ($(), $())`;
        const params = {}
    }
}

module.exports = GymCenterPreferenceRepository;