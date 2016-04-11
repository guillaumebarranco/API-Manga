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

/*router.get('/getCloseMangasById', function(mangaId, limit) {
	return mangaController.getCloseMangasById(mangaId, limit);
});*/

module.exports = router;
