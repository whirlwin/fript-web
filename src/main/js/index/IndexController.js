const FeatureToggles = require("../settings/FeatureToggles");

class IndexController {

    renderIndex(req, res) {
        const user = req.user;
        res.render("index/index", { user, FeatureToggles });
    }
}

module.exports = IndexController;
