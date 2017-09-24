const DbProvider = require("../DBProvider");
const FeatureToggles = require("../settings/FeatureToggles");

class GymTypeRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymTypes() {
        if (FeatureToggles.mockDb.enabled) {
            return Promise.resolve([{
                id: 123,
                name: "Mock Gym Name",
                country: "Norway",
                status: "active",
                created: new Date(),
                updated: new Date()
            }]);
        }

        return this.db.query(`SELECT * from gym_type`);
    }
}

module.exports = GymTypeRepository;
