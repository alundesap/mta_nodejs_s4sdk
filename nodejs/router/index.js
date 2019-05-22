/*eslint-env node, es6 */
"use strict";

module.exports = (app, server) => {
	app.use("/nodejs/sdk", require("./routes/sdk")());
	app.use("/nodejs/ex1", require("./routes/ex1")());
	app.use("/nodejs/ex2", require("./routes/ex2")());
	app.use("/nodejs/auth", require("./routes/auth")());	
};
