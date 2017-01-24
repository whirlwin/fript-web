const _ = require('lodash');
const DbProvider = require('../../db-provider');
const Try = require('try-js');

class GymCenterPreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getPreferences(userId) {
        const sql = `SELECT *
                FROM gym_center_preference gcp
                WHERE user_id = $(user_id)`;
        const params = { user_id: userId };
        this.db.query(sql, params);
        return Try.of(() => this.db.query(sql, params));
    }

    createPreference(preference, userId) {
        const sql = `INSERT INTO gym_center_preference ()
                VALUES ($(), $())`;
        const params = {};
        this.db.query(sql, params);
        return Try.of(() => this.db.query(sql, params));

    }

    updatePreference(preference, userId) {
        const sql = `UPDATE gym_center_preference
                SET status = $(status),
                    updated = now()
                WHERE user_id = $(user_id)`;
        const params = {
            user_id: userId,
            status: preference.status
        };
        this.db.query(sql, params);
        return Try.of(() => this.db.query(sql, params));
    }
}

module.exports = GymCenterPreferenceRepository;