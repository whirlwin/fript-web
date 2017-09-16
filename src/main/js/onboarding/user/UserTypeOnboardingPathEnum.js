const RouteType = require("../../routing/RouteTypeEnum");
const Method = require("../../routing/HttpMethodEnum");

module.exports = {
    render: { method: Method.get, href: "/onboarding/user" },
    get: { method: Method.get, href: "/api/onboarding/user" },
    create: { method: Method.post, href: "/api/onboarding/user" }
};
