
var data = {
    spaceSessions: ['test', 'test2'],
    searchkey: "test",
    results: []
};

rivets.formatters.prepend = function (value, prepend) {
    return prepend + value
}

rivets.bind(
    document.querySelector('#listings'), // bind to the element with id "candy-shop"
    {
        data: data // add the data object so we can reference it in our template
    }
);

function abc(event, rivetsBinding) {
    console.log(rivetsBinding)
}

var viewIndex = function (id) {
    torrentSearch.getMagnet(data.results[id])
        .then(magnet => {
            console.log(magnet);
            cmd.run('webtorrent ' + magnet);

        })
        .catch(err => {
            console.log(err);
        });
}


var weembo = function () {
    fetch('/search/' + data.searchkey, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(res => res.json())
        .then(res => {
            data.results = res

            var r = 0;
            fetch('/todd/' + data.results[r].title)
                .then(res => res.json()
                    .then(res => {
                        data.results[r].summary =
                            '<div style="height:100%; width:100%;  background:url(' + res.url + ') no-repeat center; background-size:cover;"> <div style="width: 100%; min-height: 60%; overflow-wrap: break-word;background-color: rgba(0, 0, 0, 0.8); color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="position: absolute;top:50%;left:50%; transform:translate(-50%, -50%); width: 100%; text-align:center;">' + data.results[r++].title + '</div></div> </div>';
                        fetch('/todd/' + data.results[r].title)
                            .then(res => res.json()
                                .then(res => {
                                    data.results[r].summary =
                                        '<div style="height:100%; width:100%;  background:url(' + res.url + ') no-repeat center; background-size:cover;"> <div style="width: 100%; min-height: 60%; overflow-wrap: break-word;background-color: rgba(0, 0, 0, 0.8); color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="position: absolute;top:50%;left:50%; transform:translate(-50%, -50%); width: 100%; text-align:center;">' + data.results[r++].title + '</div></div> </div>';
                                    fetch('/todd/' + data.results[r].title)
                                        .then(res => res.json()
                                            .then(res => {
                                                data.results[r].summary =
                                                    '<div style="height:100%; width:100%;  background:url(' + res.url + ') no-repeat center; background-size:cover;"> <div style="width: 100%; min-height: 60%; overflow-wrap: break-word;background-color: rgba(0, 0, 0, 0.8); color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="position: absolute;top:50%;left:50%; transform:translate(-50%, -50%); width: 100%; text-align:center;">' + data.results[r++].title + '</div></div> </div>';
                                                fetch('/todd/' + data.results[r].title)
                                                    .then(res => res.json()
                                                        .then(res => {
                                                            data.results[r].summary =
                                                                '<div style="height:100%; width:100%;  background:url(' + res.url + ') no-repeat center; background-size:cover;"> <div style="width: 100%; min-height: 60%; overflow-wrap: break-word;background-color: rgba(0, 0, 0, 0.8); color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="position: absolute;top:50%;left:50%; transform:translate(-50%, -50%); width: 100%; text-align:center;">' + data.results[r++].title + '</div></div> </div>';
                                                            fetch('/todd/' + data.results[r].title)
                                                                .then(res => res.json()
                                                                    .then(res => {
                                                                        data.results[r].summary =
                                                                            '<div style="height:100%; width:100%;  background:url(' + res.url + ') no-repeat center; background-size:cover;"> <div style="width: 100%; min-height: 60%; overflow-wrap: break-word;background-color: rgba(0, 0, 0, 0.8); color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="position: absolute;top:50%;left:50%; transform:translate(-50%, -50%); width: 100%; text-align:center;">' + data.results[r++].title + '</div></div> </div>';
                                                                        fetch('/todd/' + data.results[r].title)
                                                                            .then(res => res.json()
                                                                                .then(res => {
                                                                                    data.results[r].summary =
                                                                                        '<div style="height:100%; width:100%;  background:url(' + res.url + ') no-repeat center; background-size:cover;"> <div style="width: 100%; min-height: 60%; overflow-wrap: break-word;background-color: rgba(0, 0, 0, 0.8); color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="position: absolute;top:50%;left:50%; transform:translate(-50%, -50%); width: 100%; text-align:center;">' + data.results[r++].title + '</div></div> </div>';
                                                                                }))
                                                                    }))
                                                        }))
                                            }))
                                }))

                    }))
        }

        )
        .catch(function (error) {
            console.log(error);
        });
}

//   // Will execute myCallback every 0.5 seconds 
//   var intervalID = window.setInterval(myCallback, 10000);

//   function myCallback() {
//     fetch('/api/sessions')
//       .then(response => response.json())
//       .then(results => {
//         // Here's a list of repos!
//         console.log(data)
//         data.spaceSessions = results.list;
//         //console.log(spaceSessions)
//       });
//   }