const Optional = require("optional-js");

let apiKeys;

class ApiKeyService {

    initializeApiKeys() {
        apiKeys = Optional.ofNullable(process.env.API_KEYS)
            .map(keys => keys.split(","))
            .orElse([]);
    }

    // TODO: Improve method name
    validApiKey(req) {
        return apiKeys.includes(req.headers["x-api-key"])
    }
}

module.exports = ApiKeyService;
