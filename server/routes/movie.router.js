const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { query } = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('getting movies in router');
  const queryText = `
    SELECT * FROM "movies";
  `
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error in movie.router.get', error);
    res.sendStatus(500);
  });
  
});

router.get('/:id', (req, res) => {
  const queryText = `
  SELECT "movies".title, "movies".poster, "movies".description, 
  "genres".name, "movies".id FROM "movies_genres"
  JOIN "movies" ON "movies_genres".movie_id = "movies".id
  JOIN "genres" ON "movies_genres".genre_id = "genres".id
  WHERE "movies".id = $1;
  `;
  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in movie.router.get /id', error);
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Depending on how you make your junction table, this insert COULD change.
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;