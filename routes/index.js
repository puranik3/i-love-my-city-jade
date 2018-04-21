const express = require( 'express' );
const cities = require( '../data/cities.json' );

const indexRouter = express.Router();

indexRouter.get( '/', function( req, res ) {
    res.render( 
        'index',
        {
            headline: 'We believe that every city has something to say',
            "cities": cities
        }
    );
});

module.exports = indexRouter;