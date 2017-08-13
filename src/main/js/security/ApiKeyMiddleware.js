const express = require('express');
const winston = require('winston');
const ApiKeyService = require('./ApiKeyService');

const router = express.Router();
const apiKeyService = new ApiKeyService();

router.use((req, res, next) => {
    if (apiKeyService.validApiKey(req)) {
        next();
    } else {
        winston.info('Trying to access API with invalid X-Api-Key');
        res.status(403).send('Invalid API key - please set the X-Api-Key HTTP header');
    }
});

module.exports = router;
