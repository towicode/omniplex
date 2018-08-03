
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

            for (var p = 0; p < res.length; p++) {
                var tor = res[p];

                fetch('/todd/' + tor.title
                ).then(res => res.json().then(res => {
                    console.log(r);
                    console.log(data.results);
                    console.log(res.url);
                    console.log(data.results[r])
                    data.results[r].summary =
                    '<div style="height:100%; width:100%;  background:url(' + res.url + ') no-repeat center; background-size:cover;"> <div style="background-color:white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> ' + data.results[r++].title + '</div> </div>';
                    // '<img style="width:100%" src="'+res.url+'" class="img-fluid">';
                }));


            }

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