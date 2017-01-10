const hal = require('hal');

let instance;

class OnboardingAssembler {

    getInstance() {
        if (instance == null) {
            instance = new OnboardingAssembler();
        }
        return instance;
    }
}

module.exports = OnboardingAssembler;