// TODO: Split to separate routers
const express = require('express');
const Paths = require('./paths');
const AcceptedMatchController = require('./match/accepted/AceptedMatchController');
const GymCenterPreferenceController = require('./gym-center/preference/GymCenterPreferenceController');
const GymTypePreferenceController = require('./gym-type/preference/GymTypePreferenceController');
const OnboardingController = require('./onboarding/OnboardingController');
const PendingMatchController = require('./match/pending/PendingMatchController');
const ServiceDocController = require('./ServiceDocController');
const UserController = require('./user/UserController');

const RequestLogger = require('./RequestLogger');

class Router {

    constructor() {
        this.router = express.Router();

        this.acceptedMatchController = new AcceptedMatchController();
        this.gymCenterPreferenceController = new GymCenterPreferenceController();
        this.gymTypePreferenceController = new GymTypePreferenceController();
        this.onboardingController = new OnboardingController();
        this.serviceDocController = new ServiceDocController();
        this.userController = new UserController();
        this.pendingMatchController = new PendingMatchController();
    }

    route(app) {
        app.use(RequestLogger);

        this.router.get(Paths.root.href,
            this.serviceDocController.getServiceDoc);

        this.router.get(Paths.logIn.href,
            this.userController.logIn);

        this.router.get(Paths.getGymTypeOnboarding.href,
            this.onboardingController.getGymTypeOnboarding);

        this.router.get(Paths.getGymCenterOnboarding.href,
            this.onboardingController.getGymCenterOnboarding);

        this.router.get(Paths.getUserOnboarding.href,
            this.onboardingController.getUserOnboarding);

        this.router.put(Paths.updateGymCenterPreference.href,
            this.gymCenterPreferenceController.updatePreference);

        this.router.get(Paths.getGymTypePreferences.href,
            this.gymTypePreferenceController.getPreferences);

        this.router.post(Paths.createGymTypePreference.href,
            this.gymTypePreferenceController.createPreference);

        this.router.get(Paths.createGymCenterPreference.href,
            this.gymCenterPreferenceController.createPreference);

        this.router.put(Paths.updateGymTypePreference.href,
            this.gymTypePreferenceController.updatePreference);

        this.router.get(Paths.getPendingMatches.href,
            this.pendingMatchController.getPendingMatches);

        this.router.get(Paths.getAcceptMatches.href,
            this.acceptedMatchController.getAcceptedMatches);

        this.router.post(Paths.acceptMatch.href,
            this.acceptedMatchController.acceptMatch);

        app.use(this.router);
    }

    // TODO make more dynamic
    routeWith(path, controllerFn) {
        this.router[path.method].call(null, "/foo", controllerFn);
    }
}

module.exports = Router;

