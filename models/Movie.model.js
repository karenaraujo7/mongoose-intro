const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title: String,
  year: String,
  director: String,
  duration: String ,
  genre: [String],
  rate: Number ,
})

module.exports = mongoose.model('Movie', MovieSchema)
