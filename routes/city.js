const express = require( 'express' );
const cities = require( '../data/cities.json' );

const cityRouter = express.Router();

//app.get( '/:country/:city', function( req, res ) { // if you need a dynamic country part in the path
cityRouter.get( '/:city', function( req, res ) {
    console.log( req.params );
    //const country =  req.params.country;
    const city =  req.params.city;
    
    res.render(
        'city',
        {
            "cities": cities,
            "currentCity": cities[city]
        }
    );
});

module.exports = cityRouter;