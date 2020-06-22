//CLI: npm install mongodb --save
import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient
import MyConstants from './MyConstants.js';
// singleton
var db = null;
var getDB = async () => {
  if (db) return db;
  var uri = "mongodb+srv://" + MyConstants.DB_USER + ":" + MyConstants.DB_PASS + "@" + MyConstants.DB_SERVER + "/" + MyConstants.DB_DATABASE;
  var conn = await MongoClient.connect(uri, { useNewUrlParser: true });
  db = conn.db(MyConstants.DB_DATABASE);
  return db;
};
export { getDB };