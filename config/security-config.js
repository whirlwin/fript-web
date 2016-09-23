const dotenv = require("dotenv");

class SecurityConfig {

    configure() {
        dotenv.config({ silent: true });
    }
}

module.exports = SecurityConfig;