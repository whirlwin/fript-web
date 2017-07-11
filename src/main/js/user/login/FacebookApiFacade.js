const FB = require('fb');
const featureToggles = require('../../settings/feature-toggles');
const Try = require('try-js');

class FacebookApiFacade {

    constructor() {
        FB.options({
            appId: process.env.FACEBOOK_APP_ID,
            appSecret: process.env.FACEBOOK_APP_SECRET
        });
    }

    tryGetDetailsByFacebookToken(facebookToken) {
        if (featureToggles.mockFacebookApi.enabled) {
            return Try.of(() => Promise.resolve({
                id: "123456789",
                email: "john.doe@example.org",
                name: "John Doe",
                picture: { data: { url: "http://example.org/picture.jpg" } }
            }));
        }

        return Try.of(() => facebookToken)
            .map(token => new Promise((resolve, reject) => {
                FB.api('/me', { fields: [ 'id', 'email', 'name', 'picture' ], access_token: facebookToken }, (res) => {
                    if (res.error) {
                        reject(res.error);
                    } else {
                        resolve(res);
                    }
                });
            }));
        /*
        return Try.of(() => new Promise((resolve, reject) => {
            FB.api('/me', { fields: [ 'id', 'email', 'name', 'picture' ], access_token: facebookToken }, (res) => {
                if (res.error) {
                    reject(res.error);
                } else {
                    resolve(res);
                }
            });
        }));
        */
    }

    getDetails(facebookToken) {
        if (featureToggles.mockFacebookApi.enabled) {
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
