const winston = require('winston');

function handleError(err, req, res, next) {
    winston.error('Got error: ', err);
    res.render('common/error');
}

module.exports = handleError;