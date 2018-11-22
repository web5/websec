var express = require('express');
var router = express.Router();
var csrf = require('csurf')

var csrfProtection = csrf({ cookie: true })

router.get('/form', csrfProtection, function (req, res) {
    // pass the csrfToken to the view
    res.render('csrf', { csrfToken: req.csrfToken() })
})

router.post('/process', csrfProtection, function (req, res) {
    console.log(req.body)
    res.send('data is being processed')
})

module.exports = router;
