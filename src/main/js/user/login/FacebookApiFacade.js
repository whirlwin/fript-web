const FB = require('fb');
const featureToggles = require('../../settings/feature-toggles');
const Try = require('try-js');

class FacebookApiFacade {

    constructor() {
        FB.options({
            appId: process.env.FB_APP_ID,
            appSecret: process.env.FB_APP_SECRET
        });
    }

    // TODO: Deprecate try function
    getDetailsByFacebookTokenAsTry(facebookToken) {
        return Try.of(() => new Promise((resolve, reject) => {
            FB.api('/me', { fields: [ 'id', 'email', 'name', 'picture' ], access_token: facebookToken }, (res) => {
                if (res.error) {
                    reject(res.error);
                } else {
                    resolve(res);
                }
            });
        }));
    }

    getDetails(facebookToken) {
        if (featureToggles.mockGetFacebookUser.enabled) {
            return Promise.resolve(        {
                id: facebookUser.id,
                email: facebookUser.email,
                name: facebookUser.name,
                picture_url: facebookUser.picture.data.url
            });
        } else {
            return new Promise((resolve, reject) => {
                FB.api('/me', { fields: [ 'id', 'email', 'name', 'picture' ], access_token: facebookToken }, (res) => {
                    if (res.error) {
                        reject(res.error);
                    } else {
                        resolve(res);
                    }
                });
            });
        }
    }
}

module.exports = FacebookApiFacade;
