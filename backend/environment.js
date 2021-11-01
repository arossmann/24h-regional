require('dotenv').config();

const cosmosPort = process.env.COSMOSDB_PORT;
const cosmosHost = process.env.COSMOSDB_HOST;
const dbName = process.env.COSMOSDB_DBNAME;
const user = process.env.COSMOSDB_USER;
const pwd = process.env.COSMOSDB_PASSWORD;

module.exports = {
  cosmosPort,
  cosmosHost,
  dbName,
  user,
  pwd
};