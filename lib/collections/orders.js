module.exports = function(App){
	return App.createCollection({
		name: "orders",
		fields: [
			{name: "restaurant", type: "single_reference", params: {collection: "users"}, required: true}, //send request to orders with id of restaurant
			{name: "content", type: "text", required: true},
			{name: "datetime", type: "datetime"},
		],
		access_strategy: {
			// create: "logged_in",
			retrieve: "owner",
			delete: "owner",
			update: "owner"
		}
	})
}

// retrieve: ["or", ["owner", "restaurant"]],
// delete: ["or", ["owner", "restaurant"]],
// update: ["or", ["owner", "restaurant"]]
