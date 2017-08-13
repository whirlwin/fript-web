let API_KEYS;

class ApiKeyService {

    constructor() {
        API_KEYS = process.env.API_KEYS.split(',');
    }

    // TODO: Improve method name
    validApiKey(req) {
        return API_KEYS.includes(req.headers["x-api-key"])
    }
}

module.exports = ApiKeyService;
