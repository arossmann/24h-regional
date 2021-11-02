const mongoose = require('mongoose');
const env = require('./environment');

mongoose.Promise = global.Promise;

function connect() {
  return mongoose.connect("mongodb://"+env.cosmosHost+":"+env.cosmosPort+"/"+env.dbName+"?ssl=true&replicaSet=globaldb", {
    auth: {
      username: env.user,
      password: env.pwd
    },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false
  })
}

module.exports = {
  connect,
  mongoose
};