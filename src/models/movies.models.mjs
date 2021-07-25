import mongoose from 'mongoose'

const moviesCollection = 'movies'

const movieSchema = new mongoose.Schema({
  _id: {type: Number, require: true},
  adult: {type: Boolean, require: true},
  backdrop_path: {type: String, require: true, max: 100},
  genre_ids: {type: Array, require: true},
  original_language: {type: String, require: true, max: 2},
  original_title: {type: String, require: true, max: 100},
  overview: {type: String, require: true, max: 100},
  popularity: {type: Number, require: true},
  poster_path: {type: String, require: true, max: 100},
  release_date: {type: String, require: true, max: 100},
  title: {type: String, require: true, max: 100},
  video: {type: Boolean, require: true},
  vote_average: {type: Number, require: true},
  vote_count: {type: Number, require: true},
})

const MoviesModel = mongoose.model(moviesCollection, movieSchema)

export default MoviesModel
