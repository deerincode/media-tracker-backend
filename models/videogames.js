const mongoose = require('mongoose')


const videogameSchema = new mongoose.Schema({
    title: String,
    releaseyear: Number,
    developers: String,
    publishers: String,
    review: String,
    notes: String,
    played: Boolean,
    completed: Boolean,
})

const Videogames = mongoose.model('Videogame', videogameSchema)

module.exports = Videogames