import mongoose from 'mongoose'

const genresCollection = 'genres'

const genreSchema = new mongoose.Schema({
  _id: {type: Number, require: true},
  name: {type: String, require: true, max: 100},
})

const GenresModel = mongoose.model(genresCollection, genreSchema)

export default GenresModel
