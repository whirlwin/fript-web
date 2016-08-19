const hal = require('hal');

class ServiceDocController {

    getServiceDoc(req, res) {
        const resource = new hal.Resource();
        res.send(resource.toJSON());
    }
}

module.exports = ServiceDocController;
