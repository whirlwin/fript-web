const DbProvider = require("../../DBProvider");
const featureToggles = require("../../settings/FeatureToggles");

class UserTypePreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    get(userId) {
        if (featureToggles.mockDb.enabled) {
            return Promise.resolve({
                id: 1,
                user_id: "1",
                user_type: "pt",
                created: new Date(),
                updated: new Date()
            });
        }

        const sql = `SELECT * FROM user_type_preference
            WHERE user_id = $(user_id)`;
        const params = { user_id: userId };
        return this.db.query(sql, params)
    }
}

module.exports = UserTypePreferenceRepository;
