const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  console.log('getting genres in router');
  const queryText = `
    SELECT * FROM "genres";
  `
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error in genre.router.js', error);
    res.sendStatus(500)
  })
  
});

module.exports = router;


// req.params at the square bracket put 