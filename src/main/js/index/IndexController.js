class IndexController {

    renderIndex(req, res) {
        console.log("index...", req.user);
        res.render("index/index", { user: req.user });
    }
}

module.exports = IndexController;
