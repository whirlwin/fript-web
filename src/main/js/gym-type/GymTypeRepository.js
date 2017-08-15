const DbProvider = require('../DBProvider');
const Try = require('try-js');

class GymTypeRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymTypes() {
        const sql = `SELECT * from gym_type`;
        return this.db.query(sql);
    }
}

module.exports = GymTypeRepository;
