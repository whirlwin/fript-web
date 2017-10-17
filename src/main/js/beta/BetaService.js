const BetaRepository = require("./BetaRepository");

class BetaService {

    constructor() {
        this.betaRepository = new BetaRepository();
    }

    registerForEarlyAccess(email) {
        return this.betaRepository.createEarlyAccess(email);
    }

}

module.exports = BetaService;
