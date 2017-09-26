const winston = require("winston");

class WinstonConfig {

    configure() {
        winston.level = "debug";
    }
}

module.exports = WinstonConfig;
