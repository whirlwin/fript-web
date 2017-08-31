const Methods = require('./HttpMethodEnum');

module.exports = {
    root: { method: Methods.get, href: '/' },
    createUser: { methid: Methods.post, href: '/user' },
    logIn: { method: Methods.post, href: '/user/login' },

    getGymTypeOnboarding: { method: Methods.get, href: '/onboarding/gym-type' },
    getGymCenterOnboarding: { method: Methods.get, href: '/onboarding/gym-center' },
    getUserTypeOnboarding: { method: Methods.get, href: '/onboarding/user/type' },

    createGymCenterPreference: { method: Methods.post, href: '/gym-center/preference' },
    updateGymCenterPreference: { method: Methods.put, href: '/gym-center/preference' },

    createGymTypePreference: { method: Methods.post, href: '/gym-type/preference' },
    updateGymTypePreference: { method: Methods.put, href: '/gym-type/preference' },

    getGymTypePreferences: { method: Methods.get, href: '/gym-type/preference' },

    getMatches: { method: Methods.get, href: '/match' },
    getPendingMatches: { method: Methods.get, href: '/pending-match' },

    getAcceptMatches: { method: Methods.get, href: '/accepted-match' },
    acceptMatch: { method: Methods.post, href: '/accepted-match' }
};
