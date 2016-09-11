const winston = require('winston');

class ErrorEventConfig {

    configure() {
        process.on('unhandledRejection', (e) => {
            winston.log('Got unhandledRejection');
        });
    }
}

module.exports = ErrorEventConfig;
