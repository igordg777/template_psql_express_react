const express = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const router = express.Router();
const sessionChecker = require('../middleware/auth');
var pg = require('pg');
const app = express();
const saltRounds = 10;

const config = {
  user: 'postgres',
  database: 'testdb',
  password: 'postgres',
  port: 5432
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);


router.post('/api/signup', async (req, res, next) => {
  const { email } = req.body;

  const dbemailComander = await Comander.findOne({ email });
  const dbemailPilot = await Pilot.findOne({ email });

  if ((dbemailComander && dbemailComander.email === email) ||
    (dbemailPilot && dbemailPilot.email === email)) {
    res.status(400).json({ response: 'emailExist' });
  } else {
    res.status(200).json({ response: 'success' });
  }
})
// .post('/newPassword', async (req, res) => {
  // // Получение письма на мейл со ссылкой для нового пароля база Mongodb 
//   function gen_password(len) {
//     var password = '';
//     var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (var i = 0; i < len; i++) {
//       password += symbols.charAt(Math.floor(Math.random() * symbols.length));
//     }
//     return password;
//   }

//   let key = gen_password(20);

//   const { email } = req.body;

//   try {

//     const userComander = await Comander.findOne({ email });

//     const userPilot = await Pilot.findOne({ email });
//     if (userComander) {
//       userComander.keyForNewPassword = key;
//       await userComander.save();
//     } else if (userPilot) {
//       userPilot.keyForNewPassword = key;
//       await userPilot.save();
//     } else {
//       res.status(400).json({ response: 'Неправильно указан email!' });
//     }

//     async function main() {
//       let testAccount = await nodemailer.createTestAccount();
//       const transporter = nodemailer.createTransport({
//         host: 'smtp.yandex.ru',
//         port: 465,
//         secure: true,
//         auth: {
//           user: 'R00MR00M',
//           pass: 'iremoormoor',
//         },
//       });

//       let info = await transporter.sendMail({
//         from: '"IBMiX 👻" <R00MR00M@yandex.ru>', // sender address
//         to: `${email}`,  // list of receivers  user2.email,
//         subject: 'IBMiX ✔', // Subject line
//         text: 'Текст1', // plain text body
//         html:
//           `Для создания нового пароля перейдите по этой  <a href="http://домен нашего будущего сайта IBMiX/set_new_password/${key}">ссылке</a>
           
//     `,
//       });


//     }

//     main().catch(console.error);

//     res.status(200).json({ response: 'success' });
//   } catch (e) {


//     res.status(400).json({ response: 'fail' });
//   }
// })
.post('/api/signup/noowner', async (req, res, next) => {
  console.log('заходит')
    const {firstName, lastName,  email, crewRole, password} = req.body;
  
    try {
      pool.connect(function (err, client, done) {
        console.log('заходит1', req.body)
  
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        

        client.query(`INSERT INTO users (login, firstname, lastName, email,  crewrole, password  ) VALUES ('логин', '${firstName}', '${lastName}', '${email}', '${crewRole}','${password}');`, function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            console.log(result.rows);
            res.status(200).json({ response: 'success'});
        })
    })
    } catch (e) {
      res.status(400).json({ response: 'fail' });
    }
  })
  .post('/api/usersLength_psql', async (req, res, next) => {

    const { email, firstName, lastName, password, crewRole } = req.body;
    try {
      pool.connect(function (err, client, done) {
        let obj = {};
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
    
        client.query('SELECT * FROM users', function (err, result) {
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
  })
// .post('/set_new_password/', async (req, res) => {
// // Установка нового пароля для Mongodb 
//   try {
//     let keyForNewPassword = req.body.keyForNewPassword;
//     const userComander = await Comander.findOne({ keyForNewPassword });

//     const userPilot = await Pilot.findOne({ keyForNewPassword });
//     if (userComander) {
//       userComander.password = await bcrypt.hash(req.body.password, saltRounds);
//       await userComander.save();
//       res.status(200).send({ response: 'ok' });
//     } else if (userPilot) {

//       userPilot.password = await bcrypt.hash(req.body.password, saltRounds);
//       await userPilot.save();
//       res.status(200).send({ response: 'ok' });
//     }

//   } catch (e) {

//     res.status(400).json({ response: 'fail' });
//   }
// })
.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    pool.connect(function (err, client, done) {
      if (err) {
          console.log("Can not connect to the DB" + err);
      }
 
      client.query(`SELECT * FROM users WHERE email = '${email}' AND password ='${password}'`, function (err, result) {
        done();
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
       console.log(result.rows)
       if(result.rows.length !== 0){
        res.status(200).json({  response: 'success',  crewRole: result.rows.crewRole, result: result.rows});
       } else {
      res.status(400).json({ response: 'fail' });
    }
    })
  })
  } catch (e) {
    res.status(400).json({ response: 'fail' });
  }
})
.get('/api/logout', async (req, res, next) => {
  try {
    await req.session.destroy();
    res.clearCookie('user_sid');
    res.status(200).json({ response: 'success' });
  } catch (error) {
    res.status(400).json({ response: 'fail' });
  }
});

module.exports = router;
