const DbProvider = require('../DBProvider');

class GymCenterRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymCenters() {
        const sql = "SELECT * from gym_center";
        return this.db.query(sql);
    }
}

module.exports = GymCenterRepository;
