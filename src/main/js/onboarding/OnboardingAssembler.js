const hal = require('hal');
const Paths = require('../PathEnum');

class OnboardingAssembler {

    assembleUserOnboarding(userOnboarding) {
        let resource = new hal.Resource({}, Paths.getUserTypeOnboarding.href);
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
