const _ = require('lodash');
const DbProvider = require('../db-provider');
const Optional = require('optional-js');

class FacebookLoginReposiory {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getFacebookProfileById(id) {
        const sql = `SELECT * FROM facebook_profile WHERE id = $(id)`;
        const params = { id };
        return this.db.query(sql, params)
            .then(profiles => _.head(profiles))
            .then(maybeProfile => Optional.ofNullable(maybeProfile));
    }

    createFacebookProfile(details) {
        const sql = `INSERT INTO facebook_profile(id, email, name, picture_url)
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

module.exports = FacebookLoginReposiory;
