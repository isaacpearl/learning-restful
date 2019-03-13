// server.js

const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const myMongoDB = require('./config/db');

const CONNECTION_URL = myMongoDB.url;
const DATABASE_NAME = myMongoDB.name;

//initialize express framework 
var app = Express();

//configure BodyParser package
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, connection;

app.listen(3000, () => {
	MongoClient.connect(CONNECTION_URL, {useNewUrlParser: true}, (error, client) => {
		if (error) { throw(error); };

		database = client.db(DATABASE_NAME);
		collection = database.collection("learning-api-data");
		console.log("connected to " + DATABASE_NAME);
		require('./routes')(app, collection);
	});
});


