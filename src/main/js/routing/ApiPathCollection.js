//const Methods = require('./HttpMethodEnum');
//const RouteTypeEnum = require('./RouteTypeEnum');

/*
const GET = { method: Methods.get };
const POST = { method: Methods.post };
const PUT = { method: Methods.put };

const API = { type: 'api' };
const WEB = { type: "web" };
*/

const Feedback = require("../feedback/FeedbackPathEnum");
const Index = require("../index/IndexPathEnum");

module.exports = [
    Index,
    Feedback,
];

//module.exports = {
    /*
    apiRoot: { API, GET, href: "/api" },

    createUser: { API, POST, href: '/user' },
    logIn: { API, POST, href: '/user/login' },

    renderFeedback: { WEB, GET, href: "/feedback" },
    createFeedback: { API, POST, href: '/feedback' },

    getGymTypeOnboarding: { API, GET, href: '/onboarding/gym-type' },
    getGymCenterOnboarding: { API, GET, href: '/onboarding/gym-center' },
    getUserTypeOnboarding: { API, GET, href: '/onboarding/user/type' },

    createGymCenterPreference: { API, POST, href: '/gym-center/preference' },
    updateGymCenterPreference: { API, PUT, href: '/gym-center/preference' },

    createGymTypePreference: { API, POST, href: '/gym-type/preference' },
    updateGymTypePreference: { API, PUT, href: '/gym-type/preference' },

    getGymTypePreferences: { API, GET, href: '/gym-type/preference' },

    getMatches: { API, GET, href: '/match' },
    getPendingMatches: { API, GET, href: '/pending-match' },

    getAcceptMatches: { API, GET, href: '/accepted-match' },
    acceptMatch: { API, POST, href: '/accepted-match' }
    */
//};
