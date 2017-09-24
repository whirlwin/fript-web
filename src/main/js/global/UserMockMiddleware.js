const express = require('express');

const featureToggles = require('../settings/FeatureToggles');

const router = express.Router();

if (featureToggles.mockLoggedInUser.enabled) {
    router.use((req, res, next) => {
        req.user = {
            id: "mock_user_123",
            email: "mock_user@example.org",
            name: "Mock User",
            picture_url: "",
            type: "",
            onboarding_status: "not_started",
            created: new Date(),
            updated: new Date()
        };
        next();
    });
}

module.exports = router;
