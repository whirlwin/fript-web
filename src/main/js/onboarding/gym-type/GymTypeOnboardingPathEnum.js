const RouteType = require("../../routing/RouteTypeEnum");
const Method = require("../../routing/HttpMethodEnum");

module.exports = {
    render: { type: RouteType.web, method: Method.get, href: "/onboarding/gym-type" },
    createGymType: { type: RouteType.api, method: Method.post, href: "/api/onboarding/gym-type" }
};
