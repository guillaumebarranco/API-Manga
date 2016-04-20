"use strict";

var request = require('request-promise'),
	utilsClass = require('./test/ressources/variables.js'),
	utils = new utilsClass()
;

function insertAll() {

	var options = {
	    method: 'POST',
	    uri: utils.getApiUrl()+'/mangas/insertAllMangas',
	    body: {
	    },
	    json: true // Automatically stringifies the body to JSON 
	};

	request(options)

	.then(function() {
		console.log('finished');
	});
}

function deleteAll() {

	var options = {
	    method: 'POST',
	    uri: utils.getApiUrl()+'/mangas/deleteAllMangas',
	    body: {
	    },
	    json: true // Automatically stringifies the body to JSON 
	};

	request(options)

	.then(function() {
		insertAll();
	});
}

deleteAll();
