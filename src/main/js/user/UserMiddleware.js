const UserService = require('./UserService');

class UserMiddleware {

    constructor() {
        this.userService = new UserService();
    }

    getUserByAuthHeader(req, res, next) {
        //next("error!");
        //return;
        const authHeader = req.headers.authorization;
        return this.userService.logInWithFacebookToken(authHeader)
            .then(user => {
                console.log("foobar")
                req.user = user;
                next();
            }).catch(err => next(err))
    }
}

module.exports = UserMiddleware;
