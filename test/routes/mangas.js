"use strict";

var assert = require('chai').assert,
	request = require('request-promise')
;

// describe('Test', function() {

//     it('2 = 2', function () {
// 		assert.equal(2, 5);
//     });
// });

describe("get mangas by type : Shonen", function() {

	let response;

	beforeEach(function(done){

		request("http://localhost:1208/mangas/getMangasByType/Shonen/2")
			.then(function(res) {
				console.log(res[0]._type);
				response = JSON.parse(res);
				done();
			});
	});

	it("should pass", function(){
		assert.equal(response[0]._type, 'manga');
	});

});