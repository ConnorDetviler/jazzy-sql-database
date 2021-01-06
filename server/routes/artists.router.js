const express = require('express');
const router = express.Router();
const pool = require('./../modules/pool.js')

router.get('/', (req, res) => {
    console.log(`In /songs GET`);
    // res.send(artistList);
    const queryText = `SELECT * FROM "artists" ORDER BY "year_born" DESC;`
    pool.query(queryText).then((result) => {
        console.log(result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
    });
});

router.post('/', (req, res) => {
    // artistList.push(req.body);
    // res.sendStatus(201);
    const queryText = `
    INSERT INTO "artists" ("artist_name", "year_born")
    VALUES ($1, $2);`

    pool.query(queryText, [req.body.name, req.body.birthdate])
    .then((result) => {
        console.log(result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;