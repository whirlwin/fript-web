const bodyParser = require('body-parser');
const express = require('express');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');

class ExpressConfig {

    configure() {
        const app = express();
        app.set('view engine', 'pug');
        app.set('views', 'src/main/views');
        app.use(express.static('src/main/public'));
        app.use(bodyParser.json());
        app.use(cookieParser());
        app.use(ExpressConfig._configureSession());
        if (ExpressConfig._isNonProdEnv()) {
            app.set('json spaces', 2);
        }
        app.use(bodyParser.urlencoded({ extended: true }));
        return app;
    }

    static _configureSession() {
        return expressSession({
            secret: ExpressConfig._getSessionSecret(),
            resave: false,
            saveUninitialized: false
        });
    }

    static _getSessionSecret() {
        return crypto.randomBytes(64).toString('hex');
    }

    static _isNonProdEnv() {
        return process.env.ENV === "staging" || process.env.ENV === "dev"
    }
}

module.exports = ExpressConfig;
