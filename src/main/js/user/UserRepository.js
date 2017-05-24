const _ = require('lodash');
const DbProvider = require('../DBProvider');
const Optional = require('optional-js');
const Try = require('try-js');

class UserReposiory {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getUserById(id) {
        const sql = `SELECT * FROM users WHERE id = $(id)`;
        const params = { id };
        return Try.of(() => this.db.query(sql, params))
            .map(users => _.head(users))
            .map(maybeUser => Optional.ofNullable(maybeUser));
    }

    // TODO: Try create user
    tryCreateUser(user) {
        const sql = `INSERT INTO users(id, email, name, picture_url)
                VALUES($(id), $(email), $(name), $(picture_url))
                ON CONFLICT (id) DO NOTHING`;
        const params = {
            id: user.id,
            email: user.email,
            name: user.name,
            picture_url: user.picture_url
        };
        return Try.of(() => this.db.query(sql, params))
            .map(nothing => user);
    }

    createUser(user) {
        const sql = `INSERT INTO users(id, email, name, picture_url)
                VALUES($(id), $(email), $(name), $(picture_url))
                ON CONFLICT (id) DO NOTHING`;
        const params = {
            id: user.id,
            email: user.email,
            name: user.name,
            picture_url: user.picture_url
        };
        return this.db.query(sql, params);
    }

    updateUser(user) {
        const sql = `UPDATE users
            WHERE user_id = $(user_id)`;
    }
}

module.exports = UserReposiory;
