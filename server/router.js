const express = require('express');
const GymTypePreferenceController = require('./gym-type/preference/gym-type-preference-controller');
const PathConstants = require('./path-constants');
const ServiceDocController = require('./service-doc-controller');
const UserController = require('./user/user-controller');

const router = express.Router();

class Router {

    constructor() {
        this.gymTypePreferenceController = new GymTypePreferenceController();
        this.serviceDocController = new ServiceDocController();
        this.userController = new UserController();
    }

    route(app) {
        router.get(PathConstants.getGymTypePreferences.href, this.gymTypePreferenceController.getGymTypePreferences);
        router.get(PathConstants.logIn.href, this.userController.logIn);
        router.get(PathConstants.root.href, this.serviceDocController.getServiceDoc);

        router.post(PathConstants.createGymTypePreference.href, this.gymTypePreferenceController.createGymTypePreference);

        app.use(router);
    }
}

module.exports = Router;

