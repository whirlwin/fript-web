const FB = require('fb');
const featureToggles = require('../../settings/feature-toggles');
const UserMapper = require('../UserMapper');
const winston = require('winston');

const FB_FIELDS = [ 'id', 'email', 'name', 'picture' ];

class FacebookApiFacade {

    constructor() {
        FB.options({
            appId: process.env.FACEBOOK_APP_ID,
            appSecret: process.env.FACEBOOK_APP_SECRET
        });
        this.userMapper = new UserMapper();
    }

    getFacebookUser(facebookToken) {
        if (featureToggles.mockFacebookApi.enabled) {
            return Promise.resolve(        {
                id: facebookUser.id,
                email: facebookUser.email,
                name: facebookUser.name,
                picture_url: facebookUser.picture.data.url
            });
        } else {
            return new Promise((resolve, reject) => {
                FB.api('/me', { fields: FB_FIELDS, access_token: facebookToken }, (facebookUser) => {
                    if (facebookUser.error) {
                        reject(facebookUser.error);
                    } else {
                        console.log(facebookUser)
                        const user = this.userMapper.mapToUser(facebookUser);
                        resolve(user);
                    }
                });
            });
        }
    }
}

module.exports = FacebookApiFacade;
