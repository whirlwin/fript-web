const GymService = require('./gym-service');
const winston = require('winston');

class GymController {

    constructor() {
        this.gymService = new GymService();
    }

    getGymTypes(req, res) {
        GymService.getInstance().getGymTypesByCountryCode(req.query.countryCode)
            .peekFailure(err => winston.error(err))
            .resolve((gymTypes) => res.send(gymTypes), (err) => res.status(500).send(err));
    }
}

module.exports = GymController;