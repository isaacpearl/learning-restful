// routes/person_routes.js

const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, collection) {
	//insert a person's info into the database
	app.post("/person", (request, response) => {
		collection.insertOne(request.body, (error, result) => {
                	if (error) { return response.status(500).send(error)};
			response.send(result.result);
			console.log("successfully inserted data!");
		});
	});
        
	//return a list of all people objects in the database
	app.get("/people", (request, response) => {
		//by passing in empty object, we have no query conditions, so we return everything stored in this collection
		collection.find({}).toArray((error, result) => {
                	 if (error) { return response.status(500).send(error)};        
			 response.send(result);
			 console.log("successfully returned data!");
		});
	});

	//return a specific person object's data by ID
	app.get("/person/:id", (request, response) => {
        	collection.findOne({"_id": new ObjectID(request.params.id) }, (error, result) => {
			if (error) { return response.status(500).send(error)};         
			response.send(result);
			console.log("successfully returned one instance of data!");
		});
	});
}
