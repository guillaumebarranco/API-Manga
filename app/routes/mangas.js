"use strict";

const 
	express = require('express'),
	router = express.Router(),
	mangaControllerClass = require('./../controllers/manga'),
	mangaController = new mangaControllerClass()
;

router.post('/getAllMangas', function(req, res) {

	let filters = req.body.filters;

	res.status(200).send(mangaController.getMangasByType(mangaController.getAllMangas(filters)));

});
router.get('/getMangasByType/:type/:limit', function(req, res) {

	let type = req.params.type,
		limit = req.params.limit;

	res.status(200).send(mangaController.getMangasByType(type, limit));
});

router.get('/getMangaByName/:name', function(req, res) {

	let type = req.params.name;

	res.status(200).send(mangaController.getMangaByName(name));
});

router.post('/insertManga', function(req, res) {

	let manga = req.body.manga;

	// console.log(req.body);

	manga = {
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
	};

	res.status(200).send(mangaController.insertManga(manga));
});

router.post('/deleteManga/:mangaId', function(req, res) {

	let mangaId = req.params.mangaId;

	res.status(200).send(mangaController.deleteManga(mangaId));
});

/*router.get('/getCloseMangasById', function(mangaId, limit) {
	return mangaController.getCloseMangasById(mangaId, limit);
});*/

module.exports = router;
