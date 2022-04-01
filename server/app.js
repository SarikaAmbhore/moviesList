const express = require("express");
var app = express();
var fs = require("fs");

app.get('/getMovies', ((req, res) => {
    fs.readFile(__dirname + '/moviellist.json', 'utf8', (err, data) => {
        console.log('json data', data);
        res.send(data);
    })
}))

app.listen(3001, () => {
    console.log("listening to port", 3001)
})