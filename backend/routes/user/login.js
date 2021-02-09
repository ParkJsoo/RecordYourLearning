var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt');
const SECRET_KEY = jwtConfig.SECRET_KEY;
const EXPIRATION_DATE = jwtConfig.EXPIRATION_DATE;

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
    connection.query('SELECT email, password, name, id FROM user_info WHERE email = "' + loginData.user_email + '"', function (err, row) {
        if (row[0] !== undefined && row[0].email === loginData.user_email) {
            bcrypt.compare(loginData.user_pw, row[0].password, function (err, res2) {
                const token = jwt.sign({ loginData }, SECRET_KEY, {
                    algorithm: "HS256",
                    expiresIn: EXPIRATION_DATE})
                if (err) {
                    res.status(500).send('Internal Server Error');
                }
                if (res2) {
                    res.json({ // 로그인 성공
                        token,
                        success: true,
                        user_name: row[0].name,
                        user_id: row[0].id
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
        else {
            res.json({ // 매칭되는 아이디 없을 경우
                success: false,
                message: 'email을 확인해 주세요'
            })
        }
    })
});

module.exports = router;
