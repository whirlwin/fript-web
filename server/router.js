const express = require('express');
const ServiceDocController = require('./service-doc-controller');
const ActiveUserController = require('./active-user-controller');

const router = express.Router();

class Router {

    constructor() {
        this.serviceDocController = new ServiceDocController();
        this.activeUserController = new ActiveUserController();
    }

    route(app) {
        router.get('/', this.serviceDocController.getServiceDoc);
        router.get('/active-user', this.activeUserController.getActiveUsers);

        app.use(router);
    }
}

module.exports = Router;

