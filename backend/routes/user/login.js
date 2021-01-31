var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

const bcrypt = require('bcrypt');

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'administ',
    database : 'test_db'
});

connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res) {
    const loginData = {
        'user_email': req.body.loginData.user_email,
        'user_pw': req.body.loginData.user_pw
    };
    connection.query('SELECT email, password, name FROM user_info WHERE email = "' + loginData.user_email + '"', function (err, row) {
        if (err) {
            res.json({ // 매칭되는 아이디 없을 경우
                success: false,
                message: 'email을 확인해 주세요'
            })
        }
        if (row[0] !== undefined && row[0].email === loginData.user_email) {
            bcrypt.compare(loginData.user_pw, row[0].password, function (err, res2) {
                if (res2) {
                    res.json({ // 로그인 성공 
                        success: true,
                    })
                }
                else {
                    res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우
                        success: false,
                        message: '비밀번호를 확인해 주세요'
                    })
                }
            })
        }
    })
});

module.exports = router;