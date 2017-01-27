const GymCenterRepository = require('./gym-center-repository');

class GymCenterService {

    constructor() {
        this.gymCenterRepository = new GymCenterRepository();
    }

    getGymCenters() {
        return this.gymCenterRepository.getGymCenters();
    }
}

module.exports = GymCenterService;