const dotenv = require("dotenv");
const winston = require('winston');

class DotenvConfig {

    configure() {
        dotenv.config();
        winston.info(`current env: ${process.env.ENV}`);
    }
}

module.exports = DotenvConfig;