const express = require('express');
const GymCenterPreferenceController = require('./gym-center/preference/gym-center-preference-controller');
const GymTypePreferenceController = require('./gym-type/preference/gym-type-preference-controller');
const OnboardingController = require('./onboarding/onboarding-controller');
const PathConstants = require('./paths');
const ServiceDocController = require('./service-doc-controller');
const UserController = require('./user/user-controller');


class Router {

    constructor() {
        this.router = express.Router();

        this.gymCenterPreferenceController = new GymCenterPreferenceController();
        this.gymTypePreferenceController = new GymTypePreferenceController();
        this.onboardingController = new OnboardingController();
        this.serviceDocController = new ServiceDocController();
        this.userController = new UserController();
    }

    route(app) {
        this.router.get(PathConstants.root.href,
            this.serviceDocController.getServiceDoc);
        this.router.get(PathConstants.logIn.href,
            this.userController.logIn);

        this.router.get(PathConstants.getGymTypePreferenceOnboarding.href,
            this.onboardingController.getGymTypePreferenceOnboarding);
        this.router.get(PathConstants.getGymCenterPreferenceOnboarding.href,
            this.onboardingController.getGymCenterPreferenceOnboarding);

        this.router.get(PathConstants.getGymTypePreferences.href,
            this.gymTypePreferenceController.getGymTypePreferences);
        this.router.post(PathConstants.createGymTypePreference.href,
            this.gymTypePreferenceController.createGymTypePreference);

        this.router.get(PathConstants.createGymCenterPreference.href,
            this.gymCenterPreferenceController.createGymCenterPreference);

        app.use(this.router);
    }
}

module.exports = Router;

