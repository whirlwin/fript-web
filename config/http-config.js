const Settings = require('../settings');

class HttpConfig {

    getHttpPort() {
        if (process.env.HTTP_PORT) {
            return process.env.HTTP_PORT;
        } else {
            const env = process.env.ENV;
            return Settings[env].httpPort;
        }
    }
}

module.exports = HttpConfig;