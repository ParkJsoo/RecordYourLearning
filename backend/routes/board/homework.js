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
router.get('/read', function(req, res) {
  const userInfo = {
    'userid' : req.body.userInfo.userid,
  }
  connection.query('SELECT user_info_id, title, deadline1, deadline2, professor, contents, check FROM homework WHERE user_info_id = "' + userInfo.userid + '"', function (err, row) {
    if (row[0] !== undefined){
      // connection.query('SELECT user_info_id, title, deadline1, deadline2, professor, contents, check FROM homework WHERE user_info_id = "' + userInfo.userid + '"', function (err, row2) {
      //   if (err) {
      //     console.log(row[0])
      //     console.error("error : " + err)
      //   };
      // });
      // console.log(row)
      res.json({
        success: true,
        message: '과제 불러오기에 성공했습니다.',
          // title: row[0].title,
          // deadline1: row[0].deadline1,
          // deadline2: row[0].deadline2,
          // professor: row[0].professor,
          // contents: row[0].contents,
          // check: row[0].check,
      })
    }
    if(err) {
      console.log(err)
      res.json({
        success: false,
        message: '과제 불러오기에 실패했습니다.'
      })
    }
  });
});

router.post('/write', function(req, res) {
  const newHomeworkItem = {
    'userid' : req.body.newHomeworkItem.userid,
    'homework_title' : req.body.newHomeworkItem.homework_title,
    'homework_date1' : req.body.newHomeworkItem.homework_date1,
    'homework_date2' : req.body.newHomeworkItem.homework_date2,
    'homework_professor' : req.body.newHomeworkItem.homework_professor,
    'homework_contents' : req.body.newHomeworkItem.homework_contents,
  };
  connection.query('SELECT id FROM user_info WHERE id = "' + newHomeworkItem.userid + '"', function (err, row) {
    if (row[0] !== undefined && row[0].id === newHomeworkItem.userid){
      connection.query('INSERT INTO `homework` (`user_info_id`,`title`,`deadline1`,`deadline2`,`professor`,`contents`,`check`) VALUES ("' + newHomeworkItem.userid + '","' + newHomeworkItem.homework_title + '","' + newHomeworkItem.homework_date1 + '","' + newHomeworkItem.homework_date2 + '","' + newHomeworkItem.homework_professor + '","' + newHomeworkItem.homework_contents + '","' + 0 + '")', newHomeworkItem, function (err, row2) {
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
