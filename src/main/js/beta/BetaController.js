const BetaService = require("./BetaService");
const PathEnum = require("./BetaPathEnum");

class BetaController {

    constructor() {
        this.betaService = new BetaService();
    }

    renderEarlySignUp(req, res) {
        res.render("beta/early-signup");
    }

    registerForEarlySignUp(req, res) {
        const email = req.body.email;
        this.betaService.registerForEarlyAccess(email)
            .then(ignored => res.redirect(PathEnum.renderEarlySignUpThanks.href));
    }

    renderEarlySignUpThanks(req, res) {
        res.render("beta/early-signup-thanks");
    }
}

module.exports = BetaController;
