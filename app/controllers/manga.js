"use strict";

const
	mangaProviderClass = require('./../providers/manga'),
	mangaProvider = new mangaProviderClass()
;

class Manga {

	getAllMangas(filters) {
		return mangaProvider.getAllMangas(filters);
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
