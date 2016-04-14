"use strict";

var assert = require('chai').assert,
	request = require('request-promise'),
	utilsClass = require('./../ressources/variables.js'),
	utils = new utilsClass()
;

describe("Test routes GET", function() {

	let response = [],
		routes = [
			'getMangasByType/Shonen/2',
			'getMangaByName/Death'
		]
	;

	beforeEach(function(done){

		response = [];

		request(utils.getApiUrl()+"/mangas/"+routes.shift())

		.then(function(res) {
			response = JSON.parse(res);
			// console.log(response[0]._source);
			done();
		});
	});

	it("getMangasByType : should return type is manga", function(){
		assert.equal(response[0]._type, 'manga');
	});

	it("getMangaByName : should return name as Death Note", function(){
		assert.equal(response[0]._type, 'manga');
		assert.equal(response[0]._source.manga.name, 'Death Note');
	});
});
