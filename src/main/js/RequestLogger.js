const express = require('express');
const winston = require('winston');

const router = express.Router();

router.use((req, res, next) => {
    winston.info('Request: ' + req.url);
    next();
});

module.exports = router;
