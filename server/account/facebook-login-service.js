const FB = require('fb');

class FacebookLoginService {

    constructor() {
        FB.options({
            appId: process.env.FB_APP_ID,
            appSecret: process.env.FB_APP_SECRET
        });
    }

    logIn(facebookToken) {
        this.getUserByFacebookToken(facebookToken)
            .then(user => console.log(user));
    }

    getUserByFacebookToken(facebookToken) {
        return new Promise((resolve, reject) => {
            FB.api('/me', { fields: [ 'id', 'name', 'picture' ], access_token: facebookToken }, (res) => {
                if (!res || res.error) {

                } else {

                }
            });
        });
    }

    storeLoginDetails() {

    }
}

module.exports = FacebookLoginService;