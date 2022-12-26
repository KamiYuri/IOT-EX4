let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  body: String,
  permalink: String,
  author: String,
  title: String,
  tags: [String],
  comments: [{
    body: String,
    email: String,
    author: String
  }]
})

module.exports = mongoose.model('Post', postSchema);