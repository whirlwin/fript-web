const GymCenterRepository = require('./GymCenterRepository');

class GymCenterService {

    constructor() {
        this.gymCenterRepository = new GymCenterRepository();
    }

    getGymCenters() {
        return this.gymCenterRepository.getGymCenters();
    }
}

module.exports = GymCenterService;