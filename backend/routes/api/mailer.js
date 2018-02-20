var express = require('express');
var path = require('path');
var router = express.Router();
var nodemailer = require('nodemailer');
//var smtpTransporter = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'machun34@gmail.com',
    pass: 'rhawk1202:-)'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.send({
        data:{ hello : 'world' }
    })
});

router.post('/send' , function(req, res, next){

    let reg_mail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let reg_phone = /^\d{3}-\d{3,4}-\d{4}$/;

    if(!reg_mail.test(req.body.mail)){
        console.log('validation Error!');
        res.status(400).send({
            data : {
                mesg : '이메일이 잘못됐습니다'
            }
        });
        
    }
    else if(!reg_phone.test(req.body.phone)){
        console.log('validation error!');
        res.status(400).send({
            data : {
                mesg : '휴대폰 번호가 잘못됐습니다'
            }
        });
        
    }
    else if(req.body.subject == undefined || req.body.subject == '' || req.body.subject.length >= 500){
        console.log('validation error!');
        res.status(400).send({
            data : {
                mesg : '메일 제목이 잘못됐습니다'
            }
        })
    }
    else if(req.body.content == undefined || req.body.content == '' || req.body.content.length >= 5000){
        console.log('validation error!');
        res.status(400).send({
            data: {
                mesg: '메일 내용이 잘못됐습니다'
            }
        })
    }
    else{
        let mail_subject = '[from portfolio👍] ' + req.body.subject
        let mail_content = 'mail arrived! \nsended from : ' + req.body.mail + '\nhp : ' + req.body.phone + '\ncontent : \n' + req.body.content
        transporter.sendMail({
            from : req.body.mail,
            to: 'machun3@naver.com',
            subject: mail_subject,
            text: mail_content
        }, function(error,info){
            if(error){
                console.log(error);
                res.status(500).send({
                    data: {
                        mesg : 'mail sending failed'
                    }
                })
            }
            else{
                console.log('Email sent : ' + info.response);

                res.send({
                    data : {
                        mesg : 'mail sending succcess!',
                        body : req.body
                    }
                });
            }
        });
    }

});

module.exports = router;
