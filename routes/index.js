var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var pg = require('pg');


const config = {
  user: 'postgres',
  database: 'testdb',
  password: 'postgres',
  port: 5432
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);


const sessionChecker = require('../middleware/auth');

//newfile

router.delete('/api/delete_comander', async (req, res, next) => {

  try {
    let user = req.session.user;

    
    res.json({ response: 'success' });
  } catch (e) {
    res.status(404);
  }
});

router.delete('/api/delete_pilot', async (req, res, next) => {
  try {
    let user = req.session.user;
   
    res.json({ response: 'success' });
  } catch (e) {
    res.status(404);
  }
});



router.post('/api/usersLength', async (req, res) => {
  try {
      pool.connect(function (err, client, done) {
   
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
    
        client.query('SELECT count(*) FROM users', function (err, result) {
          done();
          if (err) {
              console.log(err);
              res.status(400).send(err);
          }
         console.log(result.rows)
          res.status(200).json({ response: result.rows});
      })
  
    })
  
  } catch (e) {
    res.status(400).json({ response: 'fail' });
  }
});

module.exports = router;
