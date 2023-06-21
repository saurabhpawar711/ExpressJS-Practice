const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
});

router.get('/success', (req, res, next) => {
    res.send('<h1>Form successfully filled!</h1>');
});

module.exports = router;
