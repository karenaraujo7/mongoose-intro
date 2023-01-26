const express = require('express')

const router = express.Router()

const MovieModel = require('../models/Movie.model')

// CRUD

router.post('/movie', async (req, res) => {
  try {
    // Extrair as informações do copro da requisição
    console.log(req.body)

    // Inserir as informações
    const result = await MovieModel.create(req.body)

    // Responder a requisição
    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.get('/movies', async (req, res) => {
  try {
    // Buscar as informações no banco
    const allMovies = await MovieModel.find()

    // responder a requisição
    res.status(200).json(allMovies)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.get('/movie/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const movie = await MovieModel.findOne({ _id: req.params.id })

    res.status(200).json(movie)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.patch('/movie/:id', async (req, res) => {
  try {
    const result = await MovieModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true },
    )

    console.log(result)

    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.delete('/movie/:id', async (req, res) => {
  try {
    const result = await MovieModel.deleteOne({ _id: req.params.id })
    console.log(result.deletedCount);

    if (result.deletedCount < 1) {
      return res.status(404).json({ msg: 'Filme não encontrado' })
    }

    res.status(200).json({})
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router
