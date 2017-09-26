const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    logInWithFacebook: { type: RouteType.web, method: Method.get, href: "/login/facebook" },
    logInWithFacebookCallback: { type: RouteType.web, method: Method.get, href: "/login/facebook/callback" },
    redirectAfterLogin: { type: RouteType.web, method: Method.get, href: "/login/success" },
    createUser: { type: RouteType.api, method: Method.post, href: "/user" },
    renderProfilePage: { type: RouteType.web, method: Method.get, href: "/user/profile" }
};

