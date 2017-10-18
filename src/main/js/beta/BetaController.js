const BetaService = require("./BetaService");
const PathEnum = require("./BetaPathEnum");
const winston = require("winston");

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
            .then(ignored => res.redirect(PathEnum.renderEarlySignUpThanks.href))
            .catch(err => {
                winston.error("Failed to register for early signup", err);
                res.render("common/error");
            });
    }

    renderEarlySignUpThanks(req, res) {
        res.render("beta/early-signup-thanks");
    }
}

module.exports = BetaController;
