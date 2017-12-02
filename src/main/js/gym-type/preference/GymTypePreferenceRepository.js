const DbProvider = require("../../DBProvider");
const FeatureToggles = require("../../settings/FeatureToggles");

class GymTypePreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    get(userId) {
        if (FeatureToggles.mockDb.enabled) {
            return Promise.resolve([{
                id: 123,
                gym_type_id: 456,
                user_id: 789,
                status: "active",
                created: new Date(),
                updated: new Date()
            }]);
        }

        const sql = `SELECT *
                FROM gym_type_preference gtp
                INNER JOIN gym_type gt ON gt.id = gtp.gym_type_id
                WHERE gtp.user_id = $(user_id)`;
        const params = { user_id: userId };
        return this.db.query(sql, params);
    }

    createPreferences(gymTypeIds, userId) {
        const sql = `INSERT INTO gym_type_preference(gym_type_ids, user_id, status)
                VALUES($(gym_type_ids), $(user_id), $(status))
                ON CONFLICT (user_id)
                DO UPDATE 
                SET gym_type_ids = $(gym_type_ids)
                WHERE gym_type_preference.user_id = $(user_id)`;
        const params = {
            gym_type_ids: gymTypeIds,
            user_id: userId,
            status: "active"
        };
        return this.db.none(sql, params);


        /*
        return this.db.tx("create-preferences-tx", tx => {
            return tx.batch(gymTypeIds
                .map(gymTypeId => this._createPreference(preference, userId, tx)))
        });
        */
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

    _createPreference(preference, userId, tx) {
        const sql = `INSERT INTO gym_type_preference (gym_type_ids, user_id, status)
                VALUES($(gym_type_id), $(user_id), $(status))
                ON CONFLICT (id)
                DO NOTHING`;
        const params = {
            gym_type_id: preference.gymTypeId,
            user_id: userId,
            status: "active"
        };
        return tx.none(sql, params);
    }
}

module.exports = GymTypePreferenceRepository;
