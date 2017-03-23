const DbProvider = require('../db-provider');
const Try = require('try-js');

class GymCenterRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymCenters() {
        const sql = `SELECT * from gym_center`;
        const result = this.db.query(sql);
        return Try.of(() => result);
    }
}

module.exports = GymCenterRepository;