const path = require('path')

exports.contactUspage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
}

exports.successFormPage = (req, res, next) => {
    res.send('<h1>Form successfully filled!</h1>');
}