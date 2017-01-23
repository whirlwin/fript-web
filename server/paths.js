const Methods = require('./http-methods');

module.exports = {
    root: { method: Methods.get, href: '/' },
    logIn: { method: Methods.get, href: '/user/login' },

    getGymTypeOnboarding: { method: Methods.get, href: '/onboarding/gym-type' },
    getGymCenterOnboarding: { method: Methods.get, href: '/onboarding/gym-center' },

    createGymCenterPreference: { method: Methods.post, href: '/gym-center/preference' },
    createGymTypePreference: { method: Methods.post, href: '/gym-type/preference' },
    updateGymTypePreference: { methods: Methods.put, href: '/gym-type/preference' },

    getGymTypePreferences: { href: '/gym-type/preference' }
};