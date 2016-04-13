"use strict";

const functionClass = require('./../../ressources/functions'),
	functions = new functionClass(),
	elasticsearch = require('elasticsearch'),
	elasticClient = new elasticsearch.Client({
		host: 'localhost:9200'
	})
;

class mangaProvider {

	constructor() {
	}

	getMangas() {
		return this.mangas;
	}

	getAllMangas(filters, callback) {

		/*if(typeof filters !== "object") filters = {};
		if(typeof filters.order !== "undefined") filters.order = 'A-Z';
		if(typeof filters.limit !== "undefined") filters.limit = 10;

		let mangas = this.getMangas();

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
		}*/

		var hits = [];

		elasticClient.search({

			index: 'mangas',
			type: 'manga',
			size: 100

		}).then(function (resp) {
			hits = resp.hits.hits;
			console.log(hits.length);
			callback(hits);

		}, function (err) {
			// console.trace(err.message);
		});
	}

	getMangasByType(type, limit) {
		type = type.toLowerCase();

		let response = [];

		for(var manga of this.mangas) {
			if(response.length === limit) break;

			if(manga.type.toLowerCase() === type) {
				response.push(manga);
			}
		}

		response.status = 'success';
		return response;
	}

	getMangaByName(name) {
		name = name.toLowerCase();

		let response = {};
		response.status = "success";

		for(var manga of this.mangas) {
			if(manga.name.toLowerCase() === name) {
				response.manga = manga;
				return response;
			}
		}

		return functions.sendError(response, "Manga Not Found");
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
		return elasticClient.index({
	        index: 'mangas',
	        type: "manga",
	        body: {
	            manga: manga
	        }
	    });
	}

	recursivelyInsertManga(index, mangas, callback) {

		var manga = mangas[index];

		if(index < mangas.length) {

			elasticClient.index({
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
	}

	insertAllMangas(callback) {

		var mangas = this.getMangas();

		this.recursivelyInsertManga(0, mangas, function() {
			callback({status:"success"});
		});
	}

	deleteAllMangas(callback) {

		console.log('ok');

		elasticClient.indices.delete({
		    index: 'mangas'

		}, function (error, response) {
			callback(response);
		});
	}

	deleteManga(mangaId) {

		console.log(mangaId);

		elasticClient.delete({
			index: 'mangas',
			type: 'manga',
			id: mangaId

		}, function (error, response) {
			return response;
		});
	}
}

module.exports = mangaProvider;
