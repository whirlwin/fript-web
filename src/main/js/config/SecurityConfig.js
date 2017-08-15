const ApiKeyService = require('../security/ApiKeyService');

class SecurityConfig {

    configure() {
        const apiKeyService = new ApiKeyService();
        apiKeyService.initializeApiKeys();
    }
}

module.exports = SecurityConfig;
