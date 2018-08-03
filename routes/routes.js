const TorrentSearchApi = require('torrent-search-api');

const torrentSearch = new TorrentSearchApi();

torrentSearch.disableAllProviders();
torrentSearch.enableProvider('1337x')



var appRouter = function (app) {
    app.get("/search/:search", function (req, res) {
        console.log(req.params.search)
        torrentSearch.search(req.params.search, 'Movies', 20)
            .then(torrents => {

                res.status(200).send(torrents);

                console.log(torrents);
            })
            .catch(err => {
                console.log(err);
            });
    });
}

module.exports = appRouter;