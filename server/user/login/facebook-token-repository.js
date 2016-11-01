const DbProvider = require('../db-provider');

class FacebookTokenRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    noop() {
    }
}

module.exports = FacebookTokenRepository;
