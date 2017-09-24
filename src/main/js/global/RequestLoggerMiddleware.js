const express = require('express');
const winston = require('winston');

const featureToggles = require('../settings/FeatureToggles');

const router = express.Router();

if (featureToggles.debugLogging.enabled) {
    router.use((req, res, next) => {
        winston.info(`HTTP ${req.method} ${req.url}`);
        next();
    });
}

module.exports = router;
