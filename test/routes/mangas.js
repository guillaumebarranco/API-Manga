"use strict";

var assert = require('chai').assert,
	request = require('request-promise'),
	utilsClass = require('./../ressources/variables.js'),
	utils = new utilsClass()
;

describe.skip("Test routes GET", function() {

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

describe("Check all mangas attributes", function() {

	let response = [],
		routes = ['getAllMangas']
	;

	var options = {
	    method: 'POST',
	    uri: utils.getApiUrl()+'/mangas/'+routes.shift(),
	    body: {
	    },
	    json: true // Automatically stringifies the body to JSON 
	};

	beforeEach(function(done) {

		request(options)

		.then(function(res) {
			// console.log(res);
			// response = JSON.parse(res);
			response = res;
			// console.log(response[0]);
			done();
		});
	});

	it("should return that all mangas have name", function() {

		testResponseFirstPart(response);
		testResponseSecondPart(response);
		testResponseThirdPart(response);
	});

});

function testResponseFirstPart(response) {

	const
		noName = [],
		noAuthor = [],
		noDescription = [],
		noHasAnime = [],
		noCountry = [],
		noIsFinished = [],
		noKeywords = [],
		noLogo = []
	;

	/*
		name
		authors
		description
		hasAnime
		country
		isFinished
		keywords
		logo
	*/

	for (let i = 0; i < response.length; i++) {

		// Name
		if(typeof response[i]._source.manga.name === "undefined" || response[i]._source.manga.name === "") {
			noName.push(response[i]._id);
		}

		// Authors
		if(
			typeof response[i]._source.manga.authors === "undefined"
			|| typeof response[i]._source.manga.authors[0] === "undefined"
			|| response[i]._source.manga.authors[0].name === ""
		) {
			noAuthor.push(response[i]._source.manga.name);
		}

		// Description
		if(typeof response[i]._source.manga.description === "undefined" || response[i]._source.manga.description === "") {
			noDescription.push(response[i]._source.manga.name);
		}

		// hasAnime
		if(typeof response[i]._source.manga.hasAnime === "undefined" || response[i]._source.manga.hasAnime === "") {
			noHasAnime.push(response[i]._source.manga.name);
		}

		// Country
		if(typeof response[i]._source.manga.country === "undefined" || response[i]._source.manga.country === "") {
			noCountry.push(response[i]._source.manga.name);
		}

		// isFinished
		if(typeof response[i]._source.manga.isFinished === "undefined" || response[i]._source.manga.isFinished === "") {
			noIsFinished.push(response[i]._source.manga.name);
		}

		// Keywords
		if(typeof response[i]._source.manga.keywords === "undefined" || response[i]._source.manga.keywords === "") {
			noKeywords.push(response[i]._source.manga.name);
		}

		// Logo
		if(typeof response[i]._source.manga.logo === "undefined" || response[i]._source.manga.logo === "") {
			noLogo.push(response[i]._source.manga.name);
		}
	}

	console.log("Vous avez "+response.length+" mangas enregistrés.");

	if(noName.length !== 0) {
		// console.log('noName', noName);
		console.log("Il manque un champ 'name' à "+noName.length+" mangas");
	}

	if(noAuthor.length !== 0) {
		// console.log('noAuthor', noAuthor);
		console.log("Il manque un champ 'authors' à "+noAuthor.length+" mangas");
	}

	if(noDescription.length !== 0) {
		// console.log('noDescription', noDescription);
		console.log("Il manque un champ 'description' à "+noDescription.length+" mangas");
	}

	if(noHasAnime.length !== 0) {
		// console.log('noHasAnime', noHasAnime);
		console.log("Il manque un champ 'hasAnime' à "+noHasAnime.length+" mangas");
	}

	if(noCountry.length !== 0) {
		// console.log('noCountry', noCountry);
		console.log("Il manque un champ 'country' à "+noCountry.length+" mangas");
	}

	if(noIsFinished.length !== 0) {
		// console.log('noIsFinished', noIsFinished);
		console.log("Il manque un champ 'isFinished' à "+noIsFinished.length+" mangas");
	}

	if(noKeywords.length !== 0) {
		// console.log('noKeywords', noKeywords);
		console.log("Il manque un champ 'keywords' à "+noKeywords.length+" mangas");
	}

	if(noLogo.length !== 0) {
		// console.log('noLogo', noLogo);
		console.log("Il manque un champ 'logo' à "+noLogo.length+" mangas");
	}
}

function testResponseSecondPart(response) {

	const
		noMainHero = [],
		noJapaneseEditor = [],
		noFrenchEditor = [],
		noNbBooks = [],
		noNbChapters = []
	;

	/*
		mainHero
		japaneseEditor
		frenchEditor
		nbBooks
		nbChapters
	*/

	for (let i = 0; i < response.length; i++) {

		// mainHero
		if(typeof response[i]._source.manga.mainHero === "undefined" || response[i]._source.manga.mainHero === "") {
			noMainHero.push(response[i]._source.manga.name);
		}

		// japaneseEditor
		if(typeof response[i]._source.manga.japaneseEditor === "undefined" || response[i]._source.manga.japaneseEditor === "") {
			noJapaneseEditor.push(response[i]._source.manga.name);
		}

		// frenchEditor
		if(typeof response[i]._source.manga.frenchEditor === "undefined" || response[i]._source.manga.frenchEditor === "") {
			noFrenchEditor.push(response[i]._source.manga.name);
		}

		// nbBooks
		if(typeof response[i]._source.manga.nbBooks === "undefined" || response[i]._source.manga.nbBooks === "") {
			noNbBooks.push(response[i]._source.manga.name);
		}

		// nbChapters
		if(typeof response[i]._source.manga.nbChapters === "undefined" || response[i]._source.manga.nbChapters === "") {
			noNbChapters.push(response[i]._source.manga.name);
		}
	}

	if(noMainHero.length !== 0) {
		// console.log('noMainHero', noMainHero);
		console.log("Il manque un champ 'mainHero' à "+noMainHero.length+" mangas");
	}

	if(noJapaneseEditor.length !== 0) {
		// console.log('noJapaneseEditor', noJapaneseEditor);
		console.log("Il manque un champ 'japaneseEditor' à "+noJapaneseEditor.length+" mangas");
	}

	if(noFrenchEditor.length !== 0) {
		// console.log('noFrenchEditor', noFrenchEditor);
		console.log("Il manque un champ 'frenchEditor' à "+noFrenchEditor.length+" mangas");
	}

	if(noNbBooks.length !== 0) {
		// console.log('noNbBooks', noNbBooks);
		console.log("Il manque un champ 'nbBooks' à "+noNbBooks.length+" mangas");
	}

	if(noNbChapters.length !== 0) {
		// console.log('noNbChapters', noNbChapters);
		console.log("Il manque un champ 'noNbChapters' à "+noNbChapters.length+" mangas");
	}
}

function testResponseThirdPart(response) {

	const
		noNbEpisodes = [],
		noLastUpdate = [],
		noPublicationEnd = [],
		noPublicationStart = [],
		noType = []
	;

	/*
		nbEpisodes
		lastUpdate
		publicationEnd
		publicationStart
		type
	*/

	for (let i = 0; i < response.length; i++) {

		// nbEpisodes
		if(typeof response[i]._source.manga.nbEpisodes === "undefined" || response[i]._source.manga.nbEpisodes === "") {
			noNbEpisodes.push(response[i]._source.manga.name);
		}

		// lastUpdate
		if(typeof response[i]._source.manga.lastUpdate === "undefined" || response[i]._source.manga.lastUpdate === "") {
			noLastUpdate.push(response[i]._source.manga.name);
		}

		// publicationEnd
		if(typeof response[i]._source.manga.publicationEnd === "undefined" || response[i]._source.manga.publicationEnd === "") {
			noPublicationEnd.push(response[i]._source.manga.name);
		}

		// publicationStart
		if(typeof response[i]._source.manga.publicationStart === "undefined" || response[i]._source.manga.publicationStart === "") {
			noPublicationStart.push(response[i]._source.manga.name);
		}

		// type
		if(typeof response[i]._source.manga.type === "undefined" || response[i]._source.manga.type === "") {
			noType.push(response[i]._source.manga.name);
		}
	}

	if(noNbEpisodes.length !== 0) {
		// console.log('noNbEpisodes', noNbEpisodes);
		console.log("Il manque un champ 'nbEpisodes' à "+noNbEpisodes.length+" mangas");
	}

	if(noLastUpdate.length !== 0) {
		// console.log('noLastUpdate', noLastUpdate);
		console.log("Il manque un champ 'lastUpdate' à "+noLastUpdate.length+" mangas");
	}

	if(noPublicationEnd.length !== 0) {
		// console.log('noPublicationEnd', noPublicationEnd);
		console.log("Il manque un champ 'publicationEnd' à "+noPublicationEnd.length+" mangas");
	}

	if(noPublicationStart.length !== 0) {
		// console.log('noPublicationStart', noPublicationStart);
		console.log("Il manque un champ 'publicationStart' à "+noPublicationStart.length+" mangas");
	}

	if(noType.length !== 0) {
		console.log('noType', noType);
		console.log("Il manque un champ 'type' à "+noType.length+" mangas");
	}
}
