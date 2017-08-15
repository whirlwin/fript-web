const hal = require('hal');
const PathConstants = require('../PathEnum');

class NavigationController {

    getServiceDoc(req, res) {
        const root = new hal.Resource();

        for (const rel in PathConstants) {
            root.link(rel, { href: PathConstants[rel].href });
        }

        // Cache service document for 5 minutes
        res.set('Cache-Control', 'public, max-age=300');
        res.send(root.toJSON());
    }
}

module.exports = NavigationController;
