const TorrentSearchApi = require('torrent-search-api');
var express = require('express');


const torrentSearch = new TorrentSearchApi();
var path = require('path');


torrentSearch.disableAllProviders();
torrentSearch.enableProvider('1337x')

var gis = require('g-i-s');





var appRouter = function (app) {

    app.use(express.static('web'))

    // app.get('/', function(req, res) {
    //     res.sendFile(path.join(__dirname + '/../web/home.html'));
    // });
    app.post("/search/:search", function (req, res) {
        console.log(req.params.search)
        torrentSearch.search(req.params.search, 'Movies', 6)
            .then(torrents => {
            
                res.status(200).send(torrents);

            })
            .catch(err => {
                console.log(err);
            });
    });

    app.get("/todd/:search", function (req, res) {
        console.log(req.params.search)


        gis(req.params.search, logResults);

        function logResults(error, results) {
            if (error) {
                console.log(error);
            }
            else {
                res.status(200).send(results[0])
            }
        }
    });

}





module.exports = appRouter;