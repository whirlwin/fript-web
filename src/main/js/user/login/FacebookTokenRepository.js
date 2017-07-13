const _ = require('lodash');
const DbProvider = require('../../DBProvider');
const featureToggles = require('../../settings/feature-toggles');
const Optional = require('optional-js');
const Try = require('try-js');
const winston = require('winston');

class FacebookTokenRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getUserByFacebookToken(facebookToken) {
        if (featureToggles.debugLogging.enabled) {
            winston.info(`Trying to get user from fript-db by Facebook token: ` + facebookToken)
        }

        if (featureToggles.mockDb.enabled) {
            return Try.of(() => Promise.resolve(Optional.of({
                id: "123456789",
                email: "john.doe@example.org",
                picture_url: "http://example.org/picture.jpg",
                created: "2017-01-01",
                updated: "2017-01-01"
            })));
        }

        const sql = `SELECT u.id, u.email, u.name, u.picture_url, u.created, u.updated
                FROM users u
                INNER JOIN facebook_token ft ON ft.user_id = u.id
                WHERE ft.token = $(token)`;
        const params = { token: facebookToken };
        return Try.of(() => this.db.query(sql, params))
            .map(users => _.head(users))
            .map(user => Optional.ofNullable(user));
    }

    tryStoreFacebookToken(facebookToken, user) {
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

    storeFacebookToken(facebookToken, user) {
        const sql = `INSERT INTO facebook_token(token, user_id)
                VALUES($(token), $(user_id))`;
        const params = {
            token: facebookToken,
            user_id: user.id
        };
        return this.db.query(sql, params);
    }
}

module.exports = FacebookTokenRepository;
