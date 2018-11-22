var express = require('express');
var router = express.Router();

router.post('/sql', function (req, res) {
    let querySQL = `
    SELECT *
    FROM user
    WHERE username='${username}'
    AND psw='${password}'
`;
// 接下来就是执行 sql 语句...

// 
// SELECT * FROM user WHERE username='zoumiaojiang' AND psw='mypassword'
// SELECT * FROM user WHERE username='zoumiaojiang' OR 1 = 1 --' AND psw='xxxx'
// SELECT * FROM user WHERE username='zoumiaojiang' OR 1 = 1


})

router.get('/cmd', function name(req, res) {
    res.render('injection')
})

router.post('/cmdSumbit', function name(req, res) {
    // 以 Node.js 为例，假如在接口中需要从 github 下载用户指定的 repo
    const exec = require('mz/child_process').exec;
    let params = {repo: req.body.repo};

    let result = exec(`git clone ${params.repo} /test/orange-koa-template`);

    // https://github.com/xx/xx.git && rm -rf ./test/* &&
    // https://github.com/dachengzi-box/orange-koa-template.git && dir &&

//     const exec = require('mz/child_process').exec;

// // 借助 shell-escape npm 包解决参数转义过滤问题
// const shellescape = require('shell-escape');

// let params = {/* 用户输入的参数 */};

// // 先过滤一下参数，让参数符合预期
// if (!/正确的表达式/.test(params.repo)) {
//     return;
// }

// let cmd = shellescape([
//     'git',
//     'clone',
//     params.repo,
//     '/some/path'
// ]);

// // cmd 的值: git clone 'https://github.com/xx/xx.git && rm -rf / &&' /some/path
// // 这样就不会被注入成功了。
// exec(cmd);

     res.json({result: result})
})

module.exports = router;
