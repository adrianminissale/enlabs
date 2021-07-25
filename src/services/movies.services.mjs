import MoviesModel from '../models/movies.models.mjs'

class MoviesService {

  constructor() {}

  async getAll (params) {
    try {
      let movies

      if (!Object.keys(params).length) {
        movies = await MoviesModel.find()
      } else {
        if (params.name) {
          movies = await MoviesModel.find( { $text: { $search: params.name } } )
        } else if (params.genre) {
          movies = await MoviesModel.find(params)
        }
      }

      if (!movies.length)
        throw new Error()

      return movies
    } catch {
      return { error: 'movie not found' }
    }
  }

  async getOne (id) {
    try {
      const movies = await MoviesModel.findById(id)

      if (!movies)
        throw new Error()

      return movies
    } catch {
      return { error: 'movie not found' }
    }
  }
}
export default MoviesService
