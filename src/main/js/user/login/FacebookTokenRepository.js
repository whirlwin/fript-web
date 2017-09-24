const _ = require('lodash');
const DbProvider = require('../../DBProvider');
const featureToggles = require('../../settings/FeatureToggles');
const winston = require('winston');

class FacebookTokenRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getUserByFacebookToken(facebookToken) {
        if (featureToggles.debugLogging.enabled) {
            winston.info(`Trying to get user from fript-db by Facebook token: ` + facebookToken);
        }

        if (featureToggles.mockDb.enabled) {
            return Promise.resolve({
                id: "123456789",
                email: "john.doe@example.org",
                picture_url: "http://example.org/picture.jpg",
                created: "2017-01-01",
                updated: "2017-01-01"
            });
        }

        const sql = `SELECT u.id, u.email, u.name, u.picture_url, u.created, u.updated
                FROM users u
                INNER JOIN facebook_token ft ON ft.user_id = u.id
                WHERE ft.token = $(token)`;
        const params = { token: facebookToken };
        return this.db.one(sql, params);
    }

    storeFacebookToken(facebookToken, user) {
        if (featureToggles.debugLogging.enabled) {
            winston.info(`Trying to store facebook token: ${facebookToken} for user with id ${user.id}`);
        }

        const sql = `INSERT INTO facebook_token(token, user_id)
                VALUES($(token), $(user_id))
                ON CONFLICT (token) DO NOTHING`;
        const params = {
            token: facebookToken,
            user_id: user.id
        };
        return this.db.query(sql, params)
            .then(result => user);
    }
}

module.exports = FacebookTokenRepository;
