const hal = require('hal');
const Paths = require('../paths');

class OnboardingAssembler {

    assembleUserOnboarding(userOnboarding) {
        let resource = new hal.Resource({}, Paths.getUserOnboarding.href);
        resource.embed('gymTypeOnboarding', userOnboarding);
        return resource;
    }

    assembleGymTypeOnboarding(gymTypeOnboarding) {
        let resource = new hal.Resource({}, Paths.getGymTypeOnboarding.href);
        resource.embed('gymTypeOnboarding', gymTypeOnboarding);
        resource.link('createGymTypePreference', Paths.createGymTypePreference.href);
        return resource;
    }
}

module.exports = OnboardingAssembler;
