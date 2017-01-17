const express = require('express');
const GymCenterPreferenceController = require('./gym-center/preference/gym-center-preference-controller');
const GymTypePreferenceController = require('./gym-type/preference/gym-type-preference-controller');
const OnboardingController = require('./onboarding/onboarding-controller');
const Paths = require('./paths');
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
        this.router.get(Paths.root.href,
            this.serviceDocController.getServiceDoc);

        this.router.get(Paths.logIn.href,
            this.userController.logIn);

        this.router.get(Paths.getGymTypeOnboarding.href,
            this.onboardingController.getGymTypeOnboarding);

        this.router.get(Paths.getGymCenterOnboarding.href,
            this.onboardingController.getGymCenterOnboarding);

        this.router.get(Paths.getGymTypePreferences.href,
            this.gymTypePreferenceController.getGymTypePreferences);

        this.router.post(Paths.createGymTypePreference.href,
            this.gymTypePreferenceController.createGymTypePreference);

        this.router.get(Paths.createGymCenterPreference.href,
            this.gymCenterPreferenceController.createGymCenterPreference);

        app.use(this.router);
    }
}

module.exports = Router;

