"use strict"
const Sealious = require("sealious");
const App = new Sealious.App();

var Users = App.ChipManager.get_chip("collection", "users");

Users.add_fields({ name: "is_restaurant", type: "boolean" })

Users.set_access_strategy({
	create: "public",
	retrieve: "public",
	update: "noone",
	delete: "noone"
})

// -------------------------------

const orders = App.createCollection({
	name: "orders",
	fields: [
		{name: "content", type: "text"},
		{name: "restaurant", type: "single_reference", params: {collection: "users"}, required: true} //send request to orders with id of restaurant
	],
	access_strategy: {
		create: "public",
		retrieve: ["or", ["owner", "restaurant"]],
		delete: ["or", ["owner", "restaurant"]],
		update: ["or", ["owner", "restaurant"]]
	}
});


App.start()

// TODO:
//  0. add declartions for start sealious and config yml for mongodb
//  1. check body of resources
//	2. test single_reference conected with id of restaurant
//  3. create access_strategy for restaurant
