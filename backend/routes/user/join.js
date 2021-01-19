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

router.post('/', function(req, res) {
  const joinData = {
    'user_name' : req.body.joinData.user_name,
    'user_email' : req.body.joinData.user_email,
    'user_pw' : req.body.joinData.user_pw
  };
  connection.query('SELECT email FROM user_info WHERE email = "' + joinData.user_email + '"', function (err, row) {
    if (row[0] == undefined){ //  동일한 아이디가 없을경우,
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          console.log('bcrypt.genSalt() error : ', err.message);
        } else {
          bcrypt.hash(joinData.user_pw, salt, function(err, hash) {
            if (err) { console.log('bcrypt.hash() error : ', err.message); }
            else {
              connection.query('INSERT INTO user_info (name,email,password) VALUES ("' + joinData.user_name + '","' + joinData.user_email + '","' + hash + '")', joinData, function (err, row2) {
                if (err) throw err;
              });
              res.json({
                success: true,
                message: '회원가입을 축하합니다!'
              })
            }
          })
        }
      });
    }
    else {
      console.log(row)
      res.json({
        success: false,
        message: '이미 사용 중인 email 입니다.'
      })
    }
  });
  
});

module.exports = router;
