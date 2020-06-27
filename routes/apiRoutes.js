const router = require('express').Router();
const db = require('../db/db');

router.get("/notes", (req, res) => {
// Should read the `db.json` file and return all saved notes as JSON.
    res.json(db.read())
})

router.post("/notes", (req, res) => {
// Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    db.write(req.body);
    res.status(204).end()
})

router.delete("/notes/:id", (req, res) => {
// Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
    db.delete(req.params.id)
    res.status(204).end()
})

module.exports = router;