var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.cookie('cart', 'test');
    res.render('xss')
});

router.post('/input', function(req, res, next) {
    res.cookie('cart', 'test');
    let username = escape(req.body.username)
    res.json({
        username: username
    })
    // 使用escape()对传入参数进行编码
    /* mysql.escape(param)
    connection.escape(param)
    pool.escape(param) */

    // 使用connection.query()的查询参数占位符
    // 'SELECT * FROM users WHERE id = ?, name = ?'

    // 使用escapeId()编码SQL查询标识符
    /* mysql.escapeId(identifier)
    connection.escapeId(identifier)
    pool.escapeId(identifier)
    var sql    = 'SELECT * FROM posts ORDER BY ' + connection.escapeId(sorter); */

    // 使用mysql.format()转义参数
    /* var userId = 1;
    var sql = "SELECT * FROM ?? WHERE ?? = ?";
    var inserts = ['users', 'id', userId];
    sql = mysql.format(sql, inserts); // SELECT * FROM users WHERE id = 1 */
});

router.get('/redirect', function(req, res, next) {
    let url = req.query.url
    res.cookie('cart', 'test');
    res.redirect(url)
});

module.exports = router;