const dotenv = require("dotenv");

class SecurityConfig {

    configure() {
        if (process.env.ENV === "dev") {
            dotenv.config();
        } else {
            dotenv.config({ silent: true });
        }
    }
}

module.exports = SecurityConfig;