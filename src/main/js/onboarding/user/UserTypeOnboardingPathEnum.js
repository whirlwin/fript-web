const RouteType = require("../../routing/RouteTypeEnum");
const Method = require("../../routing/HttpMethodEnum");

module.exports = {
    render: { method: Method.get, href: "/onboarding/user" },
    addPreferences: { method: Method.post, href: "/onboarding/user" }
};
