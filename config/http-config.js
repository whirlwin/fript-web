const Optional = require("optional-js");
const Settings = require('../settings');

class HttpConfig {

    getHttpPort() {
        return Optional.ofNullable(process.env.PORT)
            .orElse(Settings[process.env.ENV].httpPort);
    }
}

module.exports = HttpConfig;