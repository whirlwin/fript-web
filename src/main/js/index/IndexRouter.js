const Path = require("./IndexPathEnum");
const ExpressRouter = require("../routing/ExpressRouter");
const IndexController = require("./IndexController");

const controller = new IndexController();
const router = new ExpressRouter();

router.route(Path.render, controller.renderIndex.bind(controller));

module.exports = router.getRouter();
