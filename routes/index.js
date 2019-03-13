// routes/index.js

const person_routes = require('./person_routes');

module.exports = function(app, collection) {
	person_routes(app, collection);
	//could put other route groups here
};
