const Path = require("./OnboardingPathEnum");
const OnboardingController = require("./OnboardingController");
const UserMiddlware = require("../user/UserMiddleware");
const ExpressRouter = require("../routing/ExpressRouter");

const router = new ExpressRouter();
const controller = new OnboardingController();

module.exports = router.getRouter();
