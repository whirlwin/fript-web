const _ = require('lodash');
const DbProvider = require('../../db-provider');
const Optional = require('optional-js');
const Try = require('try-js');

class FacebookTokenRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getUserByFacebookToken(facebookToken) {
        const sql = `SELECT u.id, u.email, u.name, u.picture_url, u.created, u.updated
                FROM users u
                INNER JOIN facebook_token ft ON ft.user_id = u.id
                WHERE ft.token = $(token)`;
        const params = { token: facebookToken };
        const result = this.db.query(sql, params);
        return Try.of(() => result)
            .map(users => _.head(users))
            .map(user => Optional.ofNullable(user));
    }

    storeFacebookToken(facebookToken, user) {
        const sql = `INSERT INTO facebook_token(token, user_id)
                VALUES($(token), $(user_id))`;
        const params = {
            token: facebookToken,
            user_id: user.id
        };
        const result = this.db.query(sql, params);
        return Try.of(() => result)
            .map(nothing => user);
    }
}

module.exports = FacebookTokenRepository;
