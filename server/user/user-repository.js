const _ = require('lodash');
const DbProvider = require('../db-provider');
const Optional = require('optional-js');

class UserReposiory {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getUserById(id) {
        const sql = `SELECT * FROM users WHERE id = $(id)`;
        const params = { id };
        return this.db.query(sql, params)
            .then(profiles => _.head(profiles))
            .then(maybeProfile => Optional.ofNullable(maybeProfile));
    }

    createUser(details) {
        const sql = `INSERT INTO users(id, email, name, picture_url)
                VALUES($(id), $(email), $(name), $(picture_url))`;
        const params = {
            id: details.id,
            email: details.email,
            name: details.name,
            picture_url: details.picture.data.url
        };
        return this.db.query(sql, params);
    }
}

module.exports = UserReposiory;
