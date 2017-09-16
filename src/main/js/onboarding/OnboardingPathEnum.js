const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    getGymTypeOnboarding: { type: RouteType.web, method: Method.get, href: "/api/onboarding/gym-type" },
    getGymCenterOnboarding: { type: RouteType.web, method: Method.get, href: "/api//onboarding/gym-center" },
};
