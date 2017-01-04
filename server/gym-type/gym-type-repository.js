const DbProvider = require('../db-provider');
const Try = require('try-js');

class GymTypeRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getGymTypes() {
        const sql = `SELECT * from gym_type`;
        return Try.of(() => this.db.query(sql));
    }
}

module.exports = GymTypeRepository;