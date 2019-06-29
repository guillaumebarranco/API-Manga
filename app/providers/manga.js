"use strict";

const request = require('request'),
	fs = require('fs'),
	functionClass = require('./../../ressources/functions'),
	functions = new functionClass()
;

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) { if (obj.hasOwnProperty(key)) { size++; } }
    return size;
};

class mangaProvider {

	constructor() {
	}

	getMangasFromJSON(callback) {

		fs.readFile('ressources/mangas.json', 'utf8', function(err, data) {
			callback(JSON.parse(data));
		});
	}

	getAllMangas(filters, callback) {

		if(typeof filters !== "object") filters = {};
		if(typeof filters.order !== "undefined") filters.order = 'A-Z';

		/*
			if(filters.order === 'A-Z') {

				mangas = mangas.sort(function(a, b){
				    if(a.name < b.name) return -1;
				    if(a.name > b.name) return 1;
				    return 0;
				});

			} else if(filters.order === 'Z-A') {

				mangas = mangas.sort(function(a, b){
				    if(a.name > b.name) return -1;
				    if(a.name < b.name) return 1;
				    return 0;
				});
			}
		*/

		if(typeof filters.limit === "undefined") filters.limit = 1000;

		global.elasticClient.search({

			index: 'mangas',
			type: 'manga',
			size: filters.limit

		}).then(function (resp) {
			var hits = resp.hits.hits;
			callback(hits);

		}, function (err) {
			// console.trace(err.message);
		});
	}

	simpleLimitSearch(match, limit, callback) {

		// if(global.hasInternet) {

		// 	global.elasticClient.search({

		// 		index: 'mangas',
		// 		type: 'manga',
		// 		size: limit,
		// 		body: {
		// 			query : {
		// 		      match: {
		// 		        _all: match
		// 		      }
		// 		    }
		// 		}

		// 	}).then(function (resp) {
		// 		var hits = resp.hits.hits;
		// 		callback(hits);

		// 	}, function (err) {
		// 		callback(err);
		// 	});

		// } else {

			this.getMangasFromJSON(function(mangas) {
				callback(mangas.slice(mangas.length - limit));
			});
		// }
	}

	getMangasByType(type, limit, callback) {

		this.simpleLimitSearch(type, limit, function(response) {
			callback(response);
		});
	}

	getMangasByAuthor(author, limit, callback) {

		this.simpleLimitSearch(author, limit, function(response) {
			callback(response);
		});
	}

	getMangaByName(name, callback) {
		name = name.toLowerCase();

		let response = {};
		response.status = "success";

		let mangas = this.simpleLimitSearch(name, 1, function(response) {
			callback(response);
		});
	}

	getCloseMangasById(mangaId, limit) {

		let response = {};
		response.status = 'success';

		for(var manga of this.mangas) {
			if(manga.id === mangaId) {
				response.closeMangas = manga.closeMangas;
				return response;
			}
		}

		response.message = 'Close mangas not found';
		response.status = 'error';
		return response;
	}

	insertManga(manga) {
		return global.elasticClient.index({
	        index: 'mangas',
	        type: "manga",
	        body: {
	            manga: manga
	        }
	    });
	}

	recursivelyInsertManga(index, mangas, callback) {

		if(typeof mangas[index] !== "undefined") {
			var manga = mangas[index]._source.manga;

			if(index < Object.size(mangas)) {

				global.elasticClient.index({
			        index: 'mangas',
			        type: "manga",
			        body: {
			            manga: manga
			        }
			    });

			    index = index + 1;

			    this.recursivelyInsertManga(index, mangas, callback);

			} else {
		    	callback();
			}

		} else {
			callback();
		}
	}

	insertAllMangas(callback) {

		this.getMangasFromJSON((mangas) => {

			this.recursivelyInsertManga(0, mangas, function() {

				callback({
					status:"success",
					nbMangas: Object.size(mangas)
				});
			});
		});
	}

	deleteAllMangas(callback) {

		console.log('ok');

		global.elasticClient.indices.delete({
		    index: 'mangas'

		}, function (error, response) {
			callback(response);
		});
	}

	deleteManga(mangaId) {

		console.log(mangaId);

		global.elasticClient.delete({
			index: 'mangas',
			type: 'manga',
			id: mangaId

		}, function (error, response) {
			return response;
		});
	}
}

module.exports = mangaProvider;
