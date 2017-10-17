const Path = require("./BetaPathEnum");
const BetaController = require("./BetaController");
const ExpressRouter = require("../routing/ExpressRouter");

const router = new ExpressRouter();
const controller = new BetaController();

router.route(Path.renderEarlySignUp, controller.renderEarlySignUp.bind(controller));
router.route(Path.registerForEarlySignUp, controller.registerForEarlySignUp.bind(controller));
router.route(Path.renderEarlySignUpThanks, controller.renderEarlySignUpThanks.bind(controller));

module.exports = router.getRouter();
