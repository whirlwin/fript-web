class ActiveUserController {

    getActiveUsers(req, res) {
        res.send([
            // (59.933769, 10.764016)
            { lat: 59.933769, lng: 10.764016 },
            { lat: 59.953769, lng: 10.764016 },
            { lat: 59.993769, lng: 10.794016 },
        ]);
    }
}

module.exports = ActiveUserController;