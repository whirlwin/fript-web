const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    logInWithFacebook: { type: RouteType.web, method: Method.get, href: "/login/facebook" },
    logInWithFacebookCallback: { type: RouteType.web, method: Method.get, href: "/login/facebook/callback" },
    createUser: { type: RouteType.api, method: Method.post, href: "/user" }
};

