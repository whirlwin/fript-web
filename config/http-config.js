const Settings = require('../settings');

class HttpConfig {

    getHttpPort() {
        return process.env.HTTP_PORT || Settings.httpPort;
    }
}

module.exports = HttpConfig;