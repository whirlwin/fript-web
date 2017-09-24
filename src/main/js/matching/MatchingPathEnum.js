const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    renderMainMatchingView: { type: RouteType.web, method: Method.get, href: "/matching" },
};

