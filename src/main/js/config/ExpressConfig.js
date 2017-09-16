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
        app.use(this.configureSession());
        if (process.env.ENV === "dev") {
            app.set('json spaces', 2);
        }
        app.use(bodyParser.urlencoded({ extended: true }));
        return app;
    }

    configureSession() {
        return expressSession({
            secret: this.getSessionSecret(),
            resave: false,
            saveUninitialized: false
        });
    }

    getSessionSecret() {
        return crypto.randomBytes(64).toString('hex');
    }

}

module.exports = ExpressConfig;
