"use strict";

const functionClass = require('./../../ressources/functions'),
	functions = new functionClass(),
	elasticsearch = require('elasticsearch'),
	elasticClient = new elasticsearch.Client({
		host: 'localhost:9200',
		log: 'trace'
	})
;

class mangaProvider {

	constructor() {

		this.mangas = [

			{
				id: 1,
				name: "One Piece",
				description: "",
				logo: "",
				type: "Shonen",
				author: "Eiichiro Oda",
				publicationStart: "1994",
				publicationEnd: null,
				nbBooks: 78,
				nbChapters: 822,
				mainHero: {
					name: "Luffy"
				},
				mainMagazine: "Shonen Jump",
				keywords: "",
				closeMangas: [2, 5]
			},
			{
				id: 2,
				name: "Naruto",
				type: "Shonen",
				author: "Masashi Kishimoto",
				publicationStart: "",
				publicationEnd: "",
				mainHero: {

				},
				closeMangas: []
			},
			{
				id: 3,
				name: "Kingdom",
				type: "Seinen"
			},
			{
				id: 4,
				name: "Kenichi",
				type: "Eichi"
			}, {
				id: 5,
				name: "Kenshin le Vagabond",
				type: "Shonen",
				author: "Nobuhiro Watsuki",
				publicationStart: "",
				publicationEnd: ""
			}
		];
	}

	getMangas() {
		return this.mangas;
	}

	getAllMangas(filters) {

		if(typeof filters !== "object") filters = {};
		if(typeof filters.order !== "undefined") filters.order = 'A-Z';
		if(typeof filters.limit !== "undefined") filters.limit = 10;

		let mangas = this.mangas;

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

		return mangas;
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
		console.log(manga);

		return elasticClient.index({
	        index: 'mangas',
	        type: "manga",
	        body: {
	            manga: manga
	        }
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
