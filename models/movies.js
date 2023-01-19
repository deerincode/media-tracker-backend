const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    releaseyear: Number,
    directors: String,
    review: String,
    watched: Boolean,
})

const Movies = mongoose.model('Movie', movieSchema)

module.exports = Movies