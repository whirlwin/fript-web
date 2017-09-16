const Path = require("./OnboardingPathEnum");
const OnboardingController = require("./OnboardingController");
const UserMiddlware = require("../user/UserMiddleware");
const ExpressRouter = require("../routing/ExpressRouter");

const router = new ExpressRouter();
const onboardingController = new OnboardingController();
const userMiddlware = new UserMiddlware();

router.route(Path.getGymTypeOnboarding, onboardingController.getGymTypeOnboarding.bind(onboardingController));
router.route(Path.getGymCenterOnboarding, onboardingController.getGymCenterOnboarding.bind(onboardingController));

module.exports = router.getRouter();
