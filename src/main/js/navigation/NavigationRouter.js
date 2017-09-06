const express = require('express');
const Paths = require('../routing/PathEnum');
const NavigationController = require('./NavigationController');

const router = express.Router();
const navigationController = new NavigationController();

router.get(Paths.root.href, navigationController.getServiceDoc.bind(navigationController));

module.exports = router;
