
var express = require('express'),
    app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static("/Users/jrleja/Documents/Tile App" + "/Image"));

app.get('/', function (request, response) {
  response.render("covent_garden.jpg")
});

app.listen(8080);
