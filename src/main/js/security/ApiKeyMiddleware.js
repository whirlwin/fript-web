const express = require('express');
const winston = require('winston');
const ApiKeyService = require('./ApiKeyService');

const router = express.Router();
const apiKeyService = new ApiKeyService();

router.use((req, res, next) => {
    if (!req.url.startsWith("/api")) {
        return next();
    }
    if (apiKeyService.validApiKey(req)) {
        return next();
    }

    winston.info('Trying to access API with invalid X-App-Key');
    res.status(403).send('Invalid API key - please set the X-App-Key HTTP header');

});

module.exports = router;
