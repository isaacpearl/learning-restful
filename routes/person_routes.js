// routes/person_routes.js

const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, collection) {
	app.post("/person", (request, response) => {
		collection.insertOne(request.body, (error, result) => {
                	if (error) { return response.status(500).send(error)};
			response.send(result.result);
			console.log("successfully inserted data!");
		});
	});

	app.get("/people", (request, response) => {
		collection.find({}).toArray(error, result) => {
                	 if (error) { return response.status(500).send(error)};        
			 response.send(result);
			 console.log("successfully returned data!");
		});
	});
}
