"use strict";
var Sealious = require("sealious");

module.exports = function(App){
	App.createChip(Sealious.AccessStrategyType, {
	name: "restaurant-access",
		checker_function: function(context, item) {
			// if(context.user_id === null || context.user_id === undefined){
			// 	return Promise.reject("You need to be logged in");
			// }
			// if (context.get("user_id") === item.body.restaurant) {
			// 	return Promise.resolve();
			// } else {
			// 	return Promise.reject("err");
			// };

			// to do
		},
		is_item_sensitive: true,
	});
};
