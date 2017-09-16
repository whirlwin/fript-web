const Type = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    render: { type: Type.web, method: Method.get, href: "/" }
};
