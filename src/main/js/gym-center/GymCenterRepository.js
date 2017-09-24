const DbProvider = require('../DBProvider');

class GymCenterRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymCenters() {
        const sql = `SELECT *
                FROM gym_center gc
                INNER JOIN gym_type gt ON gc.gym_type_id = gt.id`;
        return this.db.query(sql);
    }
}

module.exports = GymCenterRepository;
