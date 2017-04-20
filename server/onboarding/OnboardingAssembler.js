const hal = require('hal');
const Paths = require('../paths');

let instance;

class OnboardingAssembler {

    assembleGymTypeOnboarding(gymTypeOnboarding) {
        let resource = new hal.Resource({}, Paths.getGymTypeOnboarding.href);
        resource.embed('gymTypeOnboarding', gymTypeOnboarding);
        resource.link('createGymTypePreference', Paths.createGymTypePreference.href);
        return resource;
    }

    static getInstance() {
        if (instance == null) {
            instance = new OnboardingAssembler();
        }
        return instance;
    }
}

module.exports = OnboardingAssembler;