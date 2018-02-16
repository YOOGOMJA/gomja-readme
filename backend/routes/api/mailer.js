var express = require('express');
var path = require('path');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransporter = require('nodemailer-smtp-transport');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.send({
        data:{ hello : 'world' }
    })
});

router.post('/send' , function(req, res, next){
    //res.send({
    //    data : {
    //        mesg : 'You tried to send mail',
    //        body : req.body
    //    }
    //});
    try{
        var transporter = nodemailer.createTransport(smtpTransporter({  
            service: 'naver',
            auth: {
                user :'machun3@naver.com',
                pass: 'rhawk1202:-)'
            }
        }));

        transporter.sendMail({
            from : req.body.mail,
            to : 'machun34@gmail.com',
            subject : req.body.title,
            text : req.body.content
        }, (error, res) => {
            if(error){ 
                console.log(error);
                res.send({
                    mesg : '메일 전송이 실패했습니다',
                    err : error
                });
            }
            else{
                res.send({
                    mesg: '메일 전송이 성공했습니다'
                })
            }
            transporter.close();
        });
    }
    catch(e){
        console.log(e);
        res.send({
            mesg : '메일 전송이 실패했습니다',
            err : e
        });
    }
});

module.exports = router;
