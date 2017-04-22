const DbProvider = require('../DBProvider');
const Try = require('try-js');

class GymTypeRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymTypes() {
        const sql = `SELECT * from gym_type`;
        const result = this.db.query(sql);
        return Try.of(() => result);
    }
}

module.exports = GymTypeRepository;