//CLI: npm install express ejs body-parser express-session --save

var constants = require('./constants/Constants')
const HOST = constants.HOST
const PORT = constants.PORT 
var express = require('express');
var app = express();
app.listen(PORT,HOST, function () {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
// middlewares
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var session = require('express-session');
app.use(session({ secret: "sonkk@123" }));
app.use(function (req, res, next) { // this middleware makes templates accessible session variables
  res.locals.session = req.session;
  next();
});
// template engine
app.set('view engine', 'ejs');
// controllers
app.use('/', require('./controllers/customer.js'));
app.use('/admin', require('./controllers/admin.js'));

