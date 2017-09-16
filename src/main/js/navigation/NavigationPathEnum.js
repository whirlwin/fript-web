const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    api: { type: RouteType.web, method: Method.get, href: "/api" },
};
