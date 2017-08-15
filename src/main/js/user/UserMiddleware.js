const UserService = require('./UserService');

class UserMiddleware {

    constructor() {
        this.userService = new UserService();
    }

    getUserByAuthHeader(req, res, next) {
        const authHeader = req.headers.authorization;
        return this.userService.logInWithAuthHeader(authHeader)
            .then(user => {
                req.user = user;
                next();
            }).catch(err => next(err))
    }
}

module.exports = UserMiddleware;
