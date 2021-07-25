import MoviesModel from '../models/movies.models.mjs'
import GenresModel from '../models/genres.models.mjs'

class MoviesService {

  constructor() {}

  async getAll (params) {
    try {
      const response = {
        movies: [],
        total: 0
      }
      const limit = 20

      const getTotal = async () => {
        return MoviesModel.countDocuments({}, (err, count) => count)
      }

      if (!Object.keys(params).length) {
        response.movies = await MoviesModel.find().limit( limit )
        response.total = await getTotal()
      } else {
        if (params.name) {
          response.movies = await MoviesModel.find({ $text: { $search: params.name } }).limit( limit )
        } else if (params.genre) {
          const genre = await GenresModel.findOne({ 'name': { $regex: new RegExp(params.genre, 'i') } })
          response.movies = await MoviesModel.find({ genre_ids: { $all: [genre['_id']] } }).limit( limit )
        } else if (params.page) {
          const skip = params.page * limit
          response.movies = await MoviesModel.find().skip( skip ).limit( limit )
          response.total = await getTotal()
        }
      }

      if (!response.movies.length)
        throw new Error()

      return response
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
