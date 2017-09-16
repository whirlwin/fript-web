const Path = require("./NavigationPathEnum");
const NavigationController = require('./NavigationController');
const ExpressRouter = require('../routing/ExpressRouter');

const controller = new NavigationController();
const router = new ExpressRouter();

router.route(Path.api, controller.getServiceDoc.bind(controller));

module.exports = router.getRouter();
