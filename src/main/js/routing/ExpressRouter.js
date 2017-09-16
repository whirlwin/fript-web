const express = require('express');
const HttpMethodsEnum = require('./HttpMethodEnum');

class ExpressRouter {

    constructor() {
        this.router = express.Router();
    }

    route(path, controllerFn, maybeMiddleware) {
        const middleware = ExpressRouter._handleGetMiddleware(maybeMiddleware);
        if (path.method === HttpMethodsEnum.get) {
            this.router.get(path.href, controllerFn, middleware);
        } else if (path.method === HttpMethodsEnum.post) {
            this.router.post(path.href, middleware, controllerFn);
        } else {
            throw Error("Could not determine router method");
        }
    }

    getRouter() {
        return this.router;
    }

    static _handleGetMiddleware(maybeMiddleware) {
        if (maybeMiddleware) {
            return maybeMiddleware;
        } else {
            return (next) => next();
        }
    }
}

module.exports = ExpressRouter;
