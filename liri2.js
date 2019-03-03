
const fs = require("fs");
const moment = require("moment");
const dotenv = require("dotenv").config();
const Spotify = require("node-spotify-api");
const request = require("request")
const keys = require("./keys.js")
var command = process.argv[2]

var query = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);

if (command == "movie-this") {
    movies(query)
} else if (command == "spotify-this-song") {
    music(query)
} else if (command == "concert-this") {
    concert(query)
} else if (command == "do waht it-says") {
    //do something
} else {
    //do something
}

function music(query) {
    spotify
        .search({ type: 'track', query: query })
        .then(function (data) {
            var response = data.tracks.items[0];

            console.log(responcse.album.artist.name[0]);
            console.log(responce.album.name);
            console.log(responce.album.external_urls.spotify);
            console.log(responce.name);


        }
        )
};
function concert(query) {
    request("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp", function (err, response, data) {
        if (!JSON.parse(data)[0]) {
            console.log("Sorry, we couldn't find that artist.")
        } else {

            console.log(data);
            console.log(JSON.parse(data)[0].venue.name);
            console.log(JSON.parse(data)[0].venue.city + ", " + JSON.parse(data)[0].venue.country);
            let unformattedTime = JSON.parse(data)[0].datetime
            let time = moment(unformattedTime).format("MMMM Do YYYY, h:mm:ss a")
            console.log(time);
            // I'm getting no results back and I will work on it at a later time.

        }

    }
    )
}


function movies(query) {

    console.log(query)
    request("http://www.omdbapi.com/?apikey=418b7fe2&t=" + query, function (err, response, data) {

        if (query != "") {

            console.log(JSON.parse(data).Title)
            console.log(JSON.parse(data).Year)
            console.log(JSON.parse(data).imdbRating)
            console.log(JSON.parse(data).Ratings[1].Value)
            console.log(JSON.parse(data).Country)
            console.log(JSON.parse(data).Language)
            console.log(JSON.parse(data).Plot)
            console.log(JSON.parse(data).Actors)

        } else {
            request("http://www.omdbapi.com/?apikey=418b7fe2&t=Mr+Nobody", function (err, response, data) {

                if (!err && response.statusCode === 200) {

                    console.log(JSON.parse(data).Title)
                    console.log(JSON.parse(data).Year)
                    console.log(JSON.parse(data).imdbRating)
                    console.log(JSON.parse(data).Ratings[1].Value)
                    console.log(JSON.parse(data).Country)
                    console.log(JSON.parse(data).Language)
                    console.log(JSON.parse(data).Plot)
                    console.log(JSON.parse(data).Actors)

                }
            });
        }
    });
};




// First we need to hit the api endpoint we need to include an artist name

// Once the information has been received we will format it and render it to the console 

// It needs to include name of the venue, location and date of event

// finding the liri for spotify.

// formating the data in away to include the artist and the song name the album and the preview link.

// if there is no song found the program will be defaulted to the song after.

// adding the s[potify API and using it to retrive the information needed.

// first we need to hit the api endpoint and we need to include the ( Title of the movie, year the movie came out, IMBD rating of the movie,
      // (Rotten Tomatoes, conuntry of origin, langauge,plot,actors)
// if no data got entered the movie "Mr Nobody".

//Use the fs package and read the text in  the file.

// the code going to run the song we searched for that we have saved in the random text.

