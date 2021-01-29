var nodemailer = require('nodemailer');


let sendMail=(senderName,subject,body)=>{
  console.log(senderName,subject,body)
  var transporter = nodemailer.createTransport({
    host: 'smtp.googlemail.com',
    port: 465,
    secure: true, 
    auth: {
      user: 'def831024@gmail.com',
      pass: 'Kaddy@1994'
    }
  });
  
  var mailOptions = {
    from: 'def831024@gmail.com',
    to: senderName,
    subject: subject,
    text: body
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

let sendHtmlMail=(senderName,subject)=>{
  var transporter = nodemailer.createTransport({
    host: 'smtp.googlemail.com',
    port: 465,
    secure: true, 
    auth: {
      user: 'def831024@gmail.com',
      pass: 'Kaddy@1994'
    }
  });
  
  var mailOptions = {
    from: 'def831024@gmail.com',
    to: senderName,
    subject: subject,
    html: '<h4>Hello,</h4><h5>Copy paste below link in new tab<br><a>http://expense-splitter.s3-website.ap-south-1.amazonaws.com/update-password/'+senderName+'</a></h5>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}


module.exports = {
  sendMail: sendMail,
  sendHtmlMail:sendHtmlMail
}