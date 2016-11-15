const _ = require('lodash');
const DbProvider = require('../../db-provider');
const Optional = require('optional-js');
const Try = require('try-js');

class FacebookTokenRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getUserByFacebookToken(facebookToken) {
        const sql = `SELECT * FROM users u
                INNER JOIN facebook_token ft ON ft.user_id = u.id
                WHERE ft.token = $(token)`;
        const params = { token: facebookToken };
        return Try.of(() => this.db.query(sql, params))
            .map(users => _.head(users))
            .map(user => Optional.ofNullable(user));
    }
}

module.exports = FacebookTokenRepository;
