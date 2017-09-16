const express = require('express');
const Paths = require('../routing/ApiPathCollection');
const ErrorCodeController = require('./ErrorCodeController');

const router = express.Router();
const errorCodeController = new ErrorCodeController();

router.get(Paths.apiRoot.href, errorCodeController.getErrorCodes.bind(errorCodeController));

module.exports = router;
