let db;

class DbProvider {

    static init(newDb) {
        db = newDb;
    }

    static getDb() {
        return db;
    }
}

module.exports = DbProvider;
