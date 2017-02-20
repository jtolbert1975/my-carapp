//Grab the models
var Make = require('./models/make');
var Model = require('./models/model');
var path = require('path');

    module.exports = function(app) {




    // server routes ===========================================================
    // handle things like api calls
        // sample api route
        app.get('/api/makes', function(req, res) {
            // use mongoose to get all nerds in the database
            Make.find(function(err, makes) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(makes); // return all makes in JSON format
            });
        });

        // sample api route
        app.get('/api/models', function(req, res) {
            // use mongoose to get all nerds in the database
            Model.find(function(err, models) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(models); // return all models in JSON format
            });
        });


        // authentication routes

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.sendFile(__dirname, + '/index.html');
    });

};