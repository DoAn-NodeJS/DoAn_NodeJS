//CLI: npm install express ejs body-parser express-session --save
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import {HOST, PORT} from './constants/Constants.js'
import customer from './controllers/customer.js'
import admin from './controllers/admin.js'

const app = express();
// middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "sonkk@123" }));
app.use((req, res, next)=> { // this middleware makes templates accessible session variables
  res.locals.session = req.session;
  next();
});
// template engine
app.set('view engine', 'ejs');
app.set('views', './views') 
// controllers
app.use('/', customer);
app.use('/admin', admin);

app.listen(PORT,HOST, ()=> {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});