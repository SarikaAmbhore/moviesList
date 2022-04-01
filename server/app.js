const express = require("express");
var app = express();
var fs = require("fs");

app.get('/getMovies', ((req, res) => {
    fs.readFile(__dirname + '/moviellist.json', 'utf8', (err, data) => {
        console.log('json data', data);
        res.send(data);
    })
}))

app.post("/login", (req, res) => {
    console.log(req.body);
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    res.send("user is Valid");
});

app.listen(3001, () => {
    console.log("listening to port", 3001)
})