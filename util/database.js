const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://radu:hswd@cluster0.vygso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected');
      _db = client.db()
      callback(client)
    })
    .catch(err => {
      console.log(err);
      throw err
    });
};

module.exports = mongoConnect;