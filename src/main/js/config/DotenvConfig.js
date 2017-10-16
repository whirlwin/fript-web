const dotenv = require("dotenv");
const winston = require('winston');

class DotenvConfig {

    configure() {
        try {
            dotenv.config();
        } catch (error) {
            winston.info("Failed to load .env");
        }

        winston.info(`current env: ${process.env.ENV}`);
    }
}

module.exports = DotenvConfig;
