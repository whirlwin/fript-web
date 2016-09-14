let db;

class DbUtil {

    static initializeDb(newDb) {
        db = newDb;
    }

    static getDb() {
        return db;
    }
}

module.exports = DbUtil;
