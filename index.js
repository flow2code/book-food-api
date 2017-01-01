"use strict"
const Sealious = require("sealious");
const App = new Sealious.App();

var Users = App.ChipManager.get_chip("collection", "users");
Users.add_fields([{ name: "is_restaurant", type: "boolean" }])
Users.set_access_strategy({
	create: "public",
	retrieve: "public",
	// update: "owner",
	// delete: "owner"
})

// require("./lib/access-strategies/restaurant-access.js")(App);
require("./lib/collections/orders.js")(App);

App.start()
