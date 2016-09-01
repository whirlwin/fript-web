const ActiveUserController = require('./active-user-controller');
const express = require('express');
const GymController = require('./gym/gym-controller');
const PathConstants = require('./path-constants');
const ServiceDocController = require('./service-doc-controller');

const router = express.Router();

class Router {

    constructor() {
        this.serviceDocController = new ServiceDocController();
        this.activeUserController = new ActiveUserController();
        this.gymController = new GymController();
    }

    route(app) {
        router.get(PathConstants.root, this.serviceDocController.getServiceDoc);
        router.get(PathConstants.activeUsers, this.activeUserController.getActiveUsers);
        router.get(PathConstants.gymTypes, this.gymController.getGymTypes);

        app.use(router);
    }
}

module.exports = Router;

