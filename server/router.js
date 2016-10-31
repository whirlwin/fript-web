const ActiveUserController = require('./active-user-controller');
const express = require('express');
const GymController = require('./gym/gym-controller');
const AccountController = require('./account/account-controller');
const PathConstants = require('./path-constants');
const ServiceDocController = require('./service-doc-controller');

const router = express.Router();

class Router {

    constructor() {
        this.serviceDocController = new ServiceDocController();
        this.activeUserController = new ActiveUserController();
        this.gymController = new GymController();
        this.accountController = new AccountController();
    }

    route(app) {
        router.get(PathConstants.root.href, this.serviceDocController.getServiceDoc);
        router.get(PathConstants.getActiveUsers.href, this.activeUserController.getActiveUsers);
        router.get(PathConstants.getGymTypes.href, this.gymController.getGymTypes);
        router.get(PathConstants.getAccount.href, this.accountController.getAccount);
        router.get(PathConstants.logIn.href, this.accountController.logIn);

        app.use(router);
    }
}

module.exports = Router;

