var mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const configs = {
  username: 'root',
  password: 'root',
  database: 'sample_training'
};

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(`mongodb+srv://${configs.username}:${configs.password}@cluster0.wdr62iu.mongodb.net/${configs.database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()