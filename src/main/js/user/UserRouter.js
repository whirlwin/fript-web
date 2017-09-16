const ExpressRouter = require("../routing/ExpressRouter");
const Path = require("./UserPathEnum");
const UserController = require("./UserController");
const passport = require("passport");
const passportFacebook = require("passport-facebook");

const router = new ExpressRouter();
const controller = new UserController();

router.route(Path.logInWithFacebook, passport.authenticate('facebook'));
router.route(Path.createUser, controller.createUser.bind(controller));
router.route(Path.logInWithFacebookCallback, passport.authenticate('facebook', {
    successRedirect: '/onboarding',
    failureRedirect: '/login/facebook/failure'
}));


module.exports = router.getRouter();
