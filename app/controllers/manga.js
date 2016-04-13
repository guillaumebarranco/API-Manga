"use strict";

const
	mangaProviderClass = require('./../providers/manga'),
	mangaProvider = new mangaProviderClass()
;

class Manga {

	getAllMangas(filters, callback) {

		 mangaProvider.getAllMangas(filters, function(response) {
			 console.log('response', response);
			 callback(response);
		 });
	}

	getMangasByType(type, limit) {

		return mangaProvider.getMangasByType(type, limit);
	}

	getMangaByName(name) {
		return mangaProvider.getMangaByName(name);
	}

	getCloseMangasById(mangaId, limit) {
		return mangaProvider.getCloseMangasById(mangaId, limit);
	}

	insertManga(manga) {
		return mangaProvider.insertManga(manga);
	}

	deleteManga(mangaId) {
		return mangaProvider.deleteManga(mangaId);
	}
}

module.exports = Manga;
