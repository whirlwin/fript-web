const RouteType = require("../../routing/RouteTypeEnum");
const Method = require("../../routing/HttpMethodEnum");

module.exports = {
    render: { method: Method.get, href: "/onboarding/gym-center" },
    createFeedback: { method: Method.post, href: "/api/onboarding/gym-center" },
};
