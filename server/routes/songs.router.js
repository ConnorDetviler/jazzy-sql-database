const express = require('express');
const router = express.Router();
const pool = require('./../modules/pool.js')

router.get('/', (req, res) => {
    console.log(`In /songs GET`);
    // res.send(songList);
    const queryText = `SELECT * FROM "songs" ORDER BY "title";`
    pool.query(queryText).then((result) => {
        console.log(result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
    });
});

router.post('/', (req, res) => {
    // songList.push(req.body)
    const queryText = `
    INSERT INTO "songs" ("title", "length", "released")
    VALUES ($1, $2, $3);`

    pool.query(queryText, [req.body.title, req.body.length, req.body.released])
    .then((result) => {
        console.log(result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;