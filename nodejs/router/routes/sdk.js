/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");
// var sdk-core = require("@sap/cloud-sdk-core");
///var sdk = require("@sap/cloud-sdk-vdm-business-partner-service");
//import { BusinessPartner } from "@sap/cloud-sdk-vdm-business-partner-service";
const { BusinessPartner } = require("@sap/cloud-sdk-vdm-business-partner-service");
var stringifyObj = require("stringify-object");

//var BusinessPartner = require("@sap/cloud-sdk-vdm-business-partner-service");

module.exports = () => {
	var app = express.Router();

	//Hello Router
	app.get("/", (req, res) => {
		var reqStr = stringifyObj(req.authInfo, {
		    indent: "   ",
		    singleQuotes: false
		});
		
		
		var resStr = "S4SDK Test";

		resStr += "\nreqStr\n";

		resStr += reqStr;

		function getAllBusinessPartners(): Promise<BusinessPartner[]> {
			  return BusinessPartner.requestBuilder()
			    .getAll()
			    .execute({
			      destinationName: 'BusinessPartnerService'
			    });
			}
		
		var reqBldr = getAllBusinessPartners();
		
		var sdkStr = stringifyObj(reqBldr, {
		    indent: "   ",
		    singleQuotes: false
		});

		resStr += "\nsdkStr\n";

		resStr += sdkStr;
		
		res.status(200).send(resStr);
	});
	return app;
};
