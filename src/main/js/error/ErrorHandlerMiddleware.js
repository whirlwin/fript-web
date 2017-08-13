const winston = require('winston');

function handleError(err, req, res, next) {
    winston.error('Got error: ', err);
    res.status(500).json(err);
}

module.exports = handleError;
