const express = require('express')
const Videogames = require('../models/videogames')
const router = express.Router()

// Index
router.get('/',(req,res)=>{
    Videogames.find({}, (err, foundVideogames)=>{
        res.json(foundVideogames)
    })
} )
//New - Handled by React

// Delete
router.delete('/:id', (req, res)=>{
    Videogames.findByIdAndRemove(req.params.id, (err, deletedVideogame)=>{
        res.json(deletedVideogame)
    })
})
// Update
router.put('/:id', (req, res)=>{
    Videogames.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedVideogame)=>{
        res.json(updatedVideogame);
    })
})

// Create
router.post('/', (req, res)=>{
    Videogames.create(req.body, (err, createdVideogame)=>{
        res.json(createdVideogame); //.json() will send proper headers in response so client knows it's json coming back
    })
})

//Edit - handled by React

// Show
router.get('/:id', (req, res)=>{
    Videogames.findById(req.params.id, (err, foundVideogame)=>{
        res.json(foundVideogame)
    })
})

module.exports = router