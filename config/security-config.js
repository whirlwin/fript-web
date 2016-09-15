const dotenv = require("dotenv");

class SecurityConfig {

    configure() {
        dotenv.config();
    }
}

module.exports = SecurityConfig;