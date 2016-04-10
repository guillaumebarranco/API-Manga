"use strict";

const mangaControllerClass = require('./../controllers/manga'),
	mangaController = new mangaControllerClass()
;

class Manga {

	getAllMangas(filters) {
		return mangaController.getAllMangas(filters);
	}

	getMangasByType(type, limit) {
		return mangaController.getMangasByType(type, limit);
	}

	getMangaByName(name) {
		return mangaController.getMangaByName(name);
	}

	getCloseMangasById(mangaId, limit) {
		return mangaController.getCloseMangasById(mangaId, limit);
	}

	insertManga(manga) {
		return mangaController.insertManga(manga);
	}
}

module.exports = Manga;
