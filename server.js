// server.js

const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

//initialize express framework 
var app = Express();

//configure BodyParser package
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {console.log("listening on port 3000!")});
