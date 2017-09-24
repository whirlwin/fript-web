const ExpressRouter = require("../routing/ExpressRouter");
const Path = require("./UserPathEnum");
const UserController = require("./UserController");
const passport = require("passport");

const router = new ExpressRouter();
const controller = new UserController();

router.route(Path.logInWithFacebook, passport.authenticate('facebook'));
router.route(Path.logInWithFacebookCallback, passport.authenticate('facebook', {
    successRedirect: '/login/success',
    failureRedirect: '/login/facebook/failure'
}));
router.route(Path.createUser, controller.createUser.bind(controller));
router.route(Path.redirectAfterLogin, controller.redirectAfterLogin.bind(controller));


module.exports = router.getRouter();
