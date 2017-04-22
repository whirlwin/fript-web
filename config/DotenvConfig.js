const dotenv = require("dotenv");
const Try = require('try-js');
const winston = require('winston');

class DotenvConfig {

    configure() {
        if (process.env.ENV === "production") {
            dotenv.config({ path: `${__dirname}/../.env.production`, silent: true });
        } else if (process.env.ENV === "staging") {
            dotenv.config({path: `${__dirname}/../.env`});
        } else if (process.env.ENV === "dev") {
            dotenv.config();
        } else {
            throw new Error(`Illegal value for ENV: ${process.env.ENV}`);
        }

        winston.info(`current env: ${process.env.ENV}`);
    }
}

module.exports = DotenvConfig;