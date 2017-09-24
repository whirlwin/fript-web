const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    renderFeedbackForm: { type: RouteType.web, method: Method.get, href: "/feedback" },
    createFeedback: { type: RouteType.web, method: Method.post, href: "/feedback" },
    renderFeedbackThanks: { type: RouteType.web, method: Method.get, href: "/feedback/thanks" },
};
