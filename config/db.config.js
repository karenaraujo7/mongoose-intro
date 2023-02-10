// Conectar com o MongoDB
const mongoose = require('mongoose')

const movies = require('../movies.json')

const movieSchema = require('../models/Movie.model')

const DB_NAME = 'imdb-database'

const connPromise = mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connObj) => {
    console.log(`Conectado ao banco ${connObj.connections[0].name} com sucesso`)
  })
  .catch((err) => {
    console.log(err)
  })

  module.exports = connPromise
  
