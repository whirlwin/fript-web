const Methods = require('./http-methods');

module.exports = {
    root: { method: Methods.get, href: '/' },
    logIn: { method: Methods.get, href: '/user/login' },

    getGymTypeOnboarding: { method: Methods.get, href: '/onboarding/gym-type' },
    getGymCenterOnboarding: { method: Methods.get, href: '/onboarding/gym-center' },
    getUserOnboarding: { method: Methods.get, href: '/onboarding/user' },

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
