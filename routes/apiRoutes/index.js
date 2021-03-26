const router = require('express').Router()
const db = require('../../db/db')
const {noteValidate, postNote, deleteNote} = require('../../utils/notes')

router.get('/notes', (req, res)=>{
    res.json(db)
})

router.post('/notes', ({body}, res)=>{
    if(noteValidate(body)){
        res.json({
            message: "success",
            data: postNote(body)})
    } else{
        res.status(404).json({error:'Wrong note format...'})
    }
})

router.delete('/notes/:id', (req, res)=>{
    res.json({
        message: "success",
        data: deleteNote(req.params.id)})
})

module.exports = router