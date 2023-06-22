const express = require('express');
const path = require('path');
const router = express.Router();
const contactController = require('../controllers/contactUs')


router.get('/', contactController.contactUspage);

router.post('/success', contactController.successFormPage);

module.exports = router;
