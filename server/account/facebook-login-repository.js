const _ = require('lodash');
const DbProvider = require('../db-provider');
const Optional = require('optional-js');

class FacebookLoginReposiory {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getFacebookProfile({ id }) {
        return this.db.query("SELECT * FROM facebook_profile WHERE id = ${id}", { id })
            .then(profiles => _.head(profiles))
            .then(maybeProfile => Optional.ofNullable(maybeProfile));
    }

    createFacebookProfile(details) {
        console.log(details);
        return this.db.query('INSERT INTO facebook_profile(id, email, name, picture_url) VALUES(${id}, ${email}, ${name}, ${picture_url})', {
            id: details.id,
            email: details.email,
            name: details.name,
            picture_url: details.picture.data.url
        })
    }
}

module.exports = FacebookLoginReposiory;
