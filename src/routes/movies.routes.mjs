import MoviesService from '../services/movies.services.mjs'
import express from 'express'
const router = express.Router()
const movies = new MoviesService()

router.get('/', (req, res) => {
  (async () => {
    res.json(await movies.getAll(req.query))
  })()
})

router.get('/:id', (req, res) => {
  (async () => {
    res.json(await movies.getOne(req.params.id))
  })()
})

export default router