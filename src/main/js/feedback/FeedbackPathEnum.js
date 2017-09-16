const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    render: { type: RouteType.web, method: Method.get, href: "/feedback" },
    create: { type: RouteType.api, method: Method.post, href: "/feedback" }
};
