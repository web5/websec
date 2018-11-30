var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('validator')
});

router.post('/sumbit', [
        // username must be an email
        check('username').isEmail(),
        // password must be at least 5 chars long
        check('password').isLength({ min: 5 })
    ],
    function(req, res, next) {

        const errors = validationResult(req);
        console.log('errors', errors)
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        } else {
            res.status(200).json({
                username: req.body.username
            })
        }
    }
);

router.get('/redirect', function(req, res, next) {
    let url = req.query.url
    res.cookie('cart', 'test');
    res.redirect(url)
});

module.exports = router;