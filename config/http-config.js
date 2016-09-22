const Optional = require("optional-js");

class HttpConfig {

    getHttpPort() {
        return Optional.ofNullable(process.env.PORT)
            .orElse(4000);
    }
}

module.exports = HttpConfig;