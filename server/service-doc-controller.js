const hal = require('hal');
const PathConstants = require('./path-constants');

class ServiceDocController {

    getServiceDoc(req, res) {
        const root = new hal.Resource();

        root.link('root', PathConstants.root);
        root.link('activeUser', PathConstants.activeUsers);
        root.link('gymTypes', PathConstants.gymTypes);

        // Cache service document for 5 minutes
        res.set('Cache-Control', 'public, max-age=300');
        res.send(root.toJSON());
    }
}

module.exports = ServiceDocController;
