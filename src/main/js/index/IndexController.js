class IndexController {

    renderIndex(req, res) {
        const user = req.user;
        res.render("index/index", { user });
    }
}

module.exports = IndexController;
