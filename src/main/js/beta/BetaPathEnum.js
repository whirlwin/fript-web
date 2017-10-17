const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    renderEarlySignUp: { type: RouteType.web, method: Method.get, href: "/beta/early-signup" },
    registerForEarlySignUp: { type: RouteType.web, method: Method.post, href: "/beta/early-signup/register" },
    renderEarlySignUpThanks: { type: RouteType.web, method: Method.get, href: "/beta/early-signup/thanks" },
};
