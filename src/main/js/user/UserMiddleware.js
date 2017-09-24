const UserService = require("./UserService");
const Path = require("./UserPathEnum");

class UserMiddleware {

    constructor() {
        this.userService = new UserService();
    }

    resolveUser(req, res, next) {
        if (UserMiddleware._isApiRequest(req)) {
            this._handleApiRequest(req, next);
        } else {
            UserMiddleware._handleWebRequest(req, res, next);
        }
    }

    static _isApiRequest(req) {
        const origin = req.headers["X-Requested-With"];
        return origin === "api-client"
    }

    _handleApiRequest(req, next) {
        const authHeader = req.headers.authorization;
        return this.userService.logInWithAuthHeader(authHeader)
            .then(user => {
                req.user = user;
                next();
            }).catch(err => next(err));
    }
    
    static _handleWebRequest(req, res, next) {
        if (UserMiddleware._isNotLoggedInWeb(req)) {
            res.redirect(Path.logInWithFacebook.href);
        } else {
            next();
        }
    }
    
    static _isNotLoggedInWeb(req) {
        return !req.hasOwnProperty("user");
    }
}

module.exports = UserMiddleware;
