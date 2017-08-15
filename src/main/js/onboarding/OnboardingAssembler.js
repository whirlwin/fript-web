const hal = require('hal');
const Paths = require('../paths');

class OnboardingAssembler {

    assembleGymTypeOnboarding(gymTypeOnboarding) {
        let resource = new hal.Resource({}, Paths.getGymTypeOnboarding.href);
        resource.embed('gymTypeOnboarding', gymTypeOnboarding);
        resource.link('createGymTypePreference', Paths.createGymTypePreference.href);
        return resource;
    }
}

module.exports = OnboardingAssembler;
