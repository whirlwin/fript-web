const dotenv = require("dotenv");
const Try = require('try-js');
const winston = require('winston');

class DotenvConfig {

    configure() {
        if (process.env.ENV === "production") {
            Try.of(() => dotenv.config({ path: `${__dirname}/../.env.production`, silent: true }))
                .onSuccess(nothing => this.logCurrentEnv())
                .onFailure(err => winston.error(err));
        } else if (process.env.ENV === "staging") {
            Try.of(() => dotenv.config({ path: `${__dirname}/../.env` }))
                .onSuccess(nothing => this.logCurrentEnv())
                .onFailure(err => winston.error(err));
        } else {
            throw new Error(`Illegal value for ENV: ${process.env.ENV}`);
        }
    }

    logCurrentEnv() {
        winston.info(`current env: ${process.env.ENV}`);
    }
}

module.exports = DotenvConfig;