const express = require('express');
const GymController = require('./gym/gym-controller');
const UserController = require('./user/user-controller');
const PathConstants = require('./path-constants');
const ServiceDocController = require('./service-doc-controller');

const router = express.Router();

class Router {

    constructor() {
        this.serviceDocController = new ServiceDocController();
        this.gymController = new GymController();
        this.userController = new UserController();
    }

    route(app) {
        router.get(PathConstants.root.href, this.serviceDocController.getServiceDoc);
        router.get(PathConstants.getGymTypes.href, this.gymController.getGymTypes);
        router.get(PathConstants.logIn.href, this.userController.logIn);

        app.use(router);
    }
}

module.exports = Router;

