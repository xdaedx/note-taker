heroconst fs = require('fs')
const path = require('path')
const db = require('./db/db')
const uuid = require('uuid')

const noteValidate = function(note){
    if(!note.title) return false
    if(!note.text) return false
    return true
}

const postNote = function(note){
    note.id = uuid.v4()
    db.push(note)
    fs.writeFileSync(
        path.join(__dirname, '..db/db.json'),
        JSON.stringify( db , null, 2 )
    )
    return note
}

const deleteNote = function(noteId){
    db.splice(db.findIndex(x=>x.id === noteId), 1)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( db , null, 2 )
    )
    return db
}

module.exports = {noteValidate, postNote, deleteNote}