//CLI: npm install nodemailer --save
var nodemailer = require('nodemailer');
var MyConstants = require("./MyConstants.js");
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: MyConstants.EMAIL_USER,
    pass: MyConstants.EMAIL_PASS
  }
});
var EmailUtil = {
  send(email, id, token) {
    var text = 'Cảm ơn bạn đã đăng ký! Vui lòng nhấp vào liên kết này để kích hoạt tài khoản của bạn\n';
    text += 'http://' + MyConstants.HOSTNAME + '/verify?id=' + id + '&token=' + token;
    return new Promise(function (resolve, reject) {
      var mailOptions = {
        from: MyConstants.EMAIL_USER,
        to: email,
        subject: 'KÍCH HOẠT TÀI KHOẢN',
        text: text
      };
      transporter.sendMail(mailOptions, function (err, result) {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
};
module.exports = EmailUtil;