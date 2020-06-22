//CLI: npm install mongoose --save
import mongoose from 'mongoose';
import MyConstants from './MyConstants.js';
var uri = "mongodb+srv://" + MyConstants.DB_USER + ":" + MyConstants.DB_PASS + "@" + MyConstants.DB_SERVER + "/" + MyConstants.DB_DATABASE;
mongoose.connect(uri, { useNewUrlParser: true }, function (err) {
  if (err) throw err;
  console.log("Connected to " + MyConstants.DB_SERVER + "/" + MyConstants.DB_DATABASE);
});