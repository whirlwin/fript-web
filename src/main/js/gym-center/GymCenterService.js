const GymCenterRepository = require('./GymCenterRepository');

class GymCenterService {

    constructor() {
        this.gymCenterRepository = new GymCenterRepository();
    }

    get() {
        return this.gymCenterRepository.getGymCenters();
    }
}

module.exports = GymCenterService;
