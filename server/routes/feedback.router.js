const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET Route
router.get('/', (req, res) => {
    let queryString =  `SELECT * FROM "feedback";`;
    pool.query(queryString).then( ( results )=>{
        //if successful
        res.send( results.rows);
    }).catch( (err)=>{
        // if ERROR
        console.log('ERROR GET');
        res.sendStatus( 500 );
    })
}); // END GET Route

//Post route
router.post('/', (req, res) => {
    console.log('in feedback post route with:', req.body);
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ( $1, $2, $3, $4 )`;
    let values = [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ]
    pool.query( queryString, values ).then( (response) => {
        res.sendStatus(201);
    }).catch( ( err )=>{
        console.log( 'ERROR POST');
        res.sendStatus( 500 );
    });
})

//Delete route
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/order', error);
        res.sendStatus(500);
    })
});

module.exports = router;