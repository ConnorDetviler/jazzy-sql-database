const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./modules/pool')

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

let artistsRouter = require('./routes/artists.router');
app.use('/artist', artistsRouter);

let songsRouter = require('./routes/songs.router');
app.use('/song', songsRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});


// app.get('/artist', (req, res) => {
//     console.log(`In /songs GET`);
//     // res.send(artistList);
//     const queryText = `SELECT * FROM "artists" ORDER BY "year_born" DESC;`
//     pool.query(queryText).then((result) => {
//         console.log(result);
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log(error);
//     });
// });

// app.post('/artist', (req, res) => {
//     // artistList.push(req.body);
//     // res.sendStatus(201);
//     const queryText = `
//     INSERT INTO "artists" ("artist_name", "year_born")
//     VALUES ($1, $2);`

//     pool.query(queryText, [req.body.name, req.body.birthdate])
//     .then((result) => {
//         console.log(result);
//         res.sendStatus(201);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     });
// });

// app.get('/song', (req, res) => {
//     console.log(`In /songs GET`);
//     // res.send(songList);
//     const queryText = `SELECT * FROM "songs" ORDER BY "title";`
//     pool.query(queryText).then((result) => {
//         console.log(result);
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log(error);
//     });
// });

// app.post('/song', (req, res) => {
//     // songList.push(req.body)
//     const queryText = `
//     INSERT INTO "songs" ("title", "length", "released")
//     VALUES ($1, $2, $3);`

//     pool.query(queryText, [req.body.title, req.body.length, req.body.released])
//     .then((result) => {
//         console.log(result);
//         res.sendStatus(201);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     });
// });
