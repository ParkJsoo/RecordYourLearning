var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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

router.post('/write', function(req, res) {
  const homeworkItem = {
    'userid' : req.body.homeworkItem.userid,
    'homework_title' : req.body.homeworkItem.homework_title,
    'homework_date1' : req.body.homeworkItem.homework_date1,
    'homework_date2' : req.body.homeworkItem.homework_date2,
    'homework_professor' : req.body.homeworkItem.homework_professor,
    'homework_contents' : req.body.homeworkItem.homework_contents,
  };
  connection.query('SELECT id FROM user_info WHERE id = "' + homeworkItem.userid + '"', function (err, row) {
    if (row[0] !== undefined && row[0].id === homeworkItem.userid){
      connection.query('INSERT INTO `homework` (`user_info_id`,`title`,`deadline1`,`deadline2`,`professor`,`contents`,`check`) VALUES ("' + homeworkItem.userid + '","' + homeworkItem.homework_title + '","' + homeworkItem.homework_date1 + '","' + homeworkItem.homework_date2 + '","' + homeworkItem.homework_professor + '","' + homeworkItem.homework_contents + '","' + 0 + '")', homeworkItem, function (err, row2) {
        if (err) {
          console.log(row[0])
          console.error("error : " + err)
        };
      });
      console.log(row)
      res.json({
        success: true,
        message: '과제 등록에 성공했습니다.'
      })
    }
    if(err) {
      console.log(err)
      res.json({
        success: false,
        message: '과제 등록에 실패했습니다.'
      })
    }
  });
  
});

module.exports = router;
