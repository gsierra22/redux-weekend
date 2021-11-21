const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', (req, res) => {
    let queryString =  `SELECT * FROM "feedback";`;
    pool.query(queryString).then( ( results )=>{
        //if query is successful
        res.send( results.rows);
    }).catch( (err)=>{
        // if there was an error
        console.log(err);
        res.sendStatus( 500 );
    })
}); // END GET Route


module.exports = router;