const serviceDocController = require('../server/service-doc-controller');

class RouterConfig {

    configure(app) {
        app.use(serviceDocController);
    }
}

module.exports = RouterConfig;