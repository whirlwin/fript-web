const Method = require("../../routing/HttpMethodEnum");

module.exports = {
    render: { method: Method.get, href: "/onboarding/gym-type" },
    createGymType: { method: Method.post, href: "/onboarding/gym-type" }
};
