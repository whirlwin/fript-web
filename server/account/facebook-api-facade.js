const FB = require('fb');

class FacebookApiFacade {

    constructor() {
        FB.options({
            appId: process.env.FB_APP_ID,
            appSecret: process.env.FB_APP_SECRET
        });
    }

    getDetailsByFacebookToken(facebookToken) {
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

module.exports = FacebookApiFacade;