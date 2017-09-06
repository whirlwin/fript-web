const express = require('express');
const HttpMethodsEnum = require('./HttpMethodEnum');

class ExpressRouter {

    constructor() {
        this.router = express.Router();
    }

    route(path, middleware, controllerFn) {
        if (path.method === HttpMethodsEnum.get) {
            return this.router.post(path, middleware, controllerFn);
        } else if (path.method === HttpMethodsEnum.post) {
            return this.router.post(path, middleware, controllerFn);
        } else {
            throw Error("Could not determine router method");
        }
    }

    getRouter() {
        return this.router;
    }
}

module.exports = ExpressRouter;
