const express = require('express');
const Paths = require('../PathEnum');
const ErrorCodeController = require('./ErrorCodeController');

const router = express.Router();
const errorCodeController = new ErrorCodeController();

router.get(Paths.root.href, errorCodeController.getErrorCodes.bind(errorCodeController));

module.exports = router;
