
var express = require('express');
var app = express();
var path    = require("path");
var bodyParser = require('body-parser')

app.use('/static' ,express.static(__dirname + '/public'));
app.use('/libs', express.static(__dirname + '/bower_components'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req,res) {
	res.sendFile(path.join(__dirname+'/public/views/index.html'));
});

app.get('/albums', function (req, res, next) {
	res.send(albumsList);
});

app.get('/newAlbum', function (req, res, next) {
	console.log(JSON.stringify(req.query));
	var newAlbum = {};
	newAlbum.id = req.query.id;
	newAlbum.name = req.query.name;
	newAlbum.artist = req.query.artist;
	newAlbum.released = req.query.released;
	albumsList.albums.push(newAlbum);
	res.send(albumsList);
});

app.post('/newAlbum', function (req, res, next) {
	console.log(JSON.stringify(req.body.data.album));
	albumsList.albums.push(req.body.data.album);
	console.log(JSON.stringify(albumsList));
	res.send(albumsList);
});

app.listen(3000, function  () {
	console.log("escuchando el puerto 3000");
});


var albumsList = {
	"albums":[
		{
			"id":1,
			"name": "Kill'em All",
			"artist": "Metallica",
			"released": 427960800000
		},
		{
			"id":2,
			"name":"Highway to Hell",
			"artist":"AC/DC",
			"released":301903200000
		},
		{
			"id":3,
			"name":"Back to Black",
			"artist":"Amy Winehouse",
			"released":1159592400000
		},
		{
			"id":4,
			"name":"AM",
			"artist":"Arctic Monkeys",
			"released": 1376024400000
		},
		{
			"id":5,
			"name":"Enema of State",
			"artist":"Blink 182",
			"released": 930805200000
		}
	]
};
