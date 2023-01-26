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
  
  // try {
  //   // Interagir com o banco

  //   await connObj.connections[0].dropDatabase()

  //   // Criar documento

  //   const createMovie = await movieSchema.create({
  //     title: 'Homem Aranha',
  //     year: '2022',
  //     director: 'Stanley',
  //     duration: '2h',
  //     genre: ['Ação', 'Drama'],
  //     rate: 9.2,
  //   })

  //   // console.log(createMovie);

  //   // Criar varios documentos ao mesmo tempo

  //   const createMany = await movieSchema.insertMany(movies)

  //   // Consultar documentos

  //   const allMovies = await movieSchema.find()
  //   // console.log(allMovies);

  //   // Consultar um documento especifico

  //   const uniqueMovie = await movieSchema.findOne({ title: 'Homem Aranha' })
  //   console.log(uniqueMovie)

  //   // Editar um docunento

  //   const editMovie = await movieSchema.findOneAndUpdate(
  //     { title: 'Homem Aranha' },
  //     { $set: { rate: 9.5 } },
  //     { new: true },
  //   )

  //   console.log('Filme editado ->', editMovie)

  //   // Deletar um documento
  //   const deleteMovie = await movieSchema.delete({ title: 'Homem Aranha' })
  //   console.log(deleteMovie)

  // } catch (err) {
  //   console.log(err)
  // }