const express = require('express')
const Movies = require('../models/movies')
const router = express.Router()


// Index
router.get('/',(req,res)=>{
    Movies.find({}, (err, foundMovies)=>{
        res.json(foundMovies)
    })
} )
//New - Handled by React

// Delete
router.delete('/:id', (req, res)=>{
    Movies.findByIdAndRemove(req.params.id, (err, deletedMovie)=>{
        res.json(deletedMovie)
    })
})
// Update
router.put('/:id', (req, res)=>{
    Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie)=>{
        res.json(updatedMovie);
    })
})

// Create
router.post('/', (req, res)=>{
    Movies.create(req.body, (err, createdMovie)=>{
        res.json(createdMovie); //.json() will send proper headers in response so client knows it's json coming back
    })
})

//Edit - handled by React

// Show
router.get('/:id', (req, res)=>{
    Movies.findById(req.params.id, (err, foundMovie)=>{
        res.json(foundMovie)
    })
})

module.exports = router