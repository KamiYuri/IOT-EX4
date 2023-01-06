const mongoose = require('mongoose');
const { database: { username, password, database } } = require('../config')
mongoose.set('strictQuery', false);

class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.wdr62iu.mongodb.net/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()