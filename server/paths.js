const Methods = require('./http-methods');

module.exports = {
    root: { method: Methods.get, href: '/' },
    logIn: { method: Methods.get, href: '/user/login' },

    getGymTypePreferenceOnboarding: { method: Methods.get, href: '/onboarding/gym-type-preference' },
    getGymCenterPreferenceOnboarding: { method: Methods.get, href: '/onboarding/gym-center-preference' },

    createGymCenterPreference: { method: Methods.post, href: '/gym-center/preference' },
    createGymTypePreference: { method: href: '/gym-type/preference' },

    getGymTypePreferences: { href: '/gym-type/preference' }
};