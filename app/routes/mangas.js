"use strict";

const 
	express = require('express'),
	router = express.Router(),
	mangaControllerClass = require('./../controllers/manga'),
	mangaController = new mangaControllerClass()
;

/*******************/
/*       GET       */
/*******************/

/*
 * POST
 *
 * Body
 * @object filters 		: example {limit: 10}
 */
router.post('/getAllMangas', function(req, res) {

	let filters = req.body.filters;

	mangaController.getAllMangas(filters, function(response) {
		res.status(200).send(response);
	});
});

/*
 * GET
 *
 * Params
 * @string type 		: example "shonen"
 * @int limit			: example 10
 */
router.get('/all/:type/:limit', function(req, res) {

	let type = req.params.type,
		limit = req.params.limit;

	mangaController.getMangasByType(type, limit, function(response) {
		res.status(200).send(response);
	});
});

/*
 * GET
 *
 * Params
 * @string author 		: example "Akira Toriyama"
 * @int limit			: example 10
 */
router.get('/getMangasByAuthor/:author/:limit', function(req, res) {

	let author = req.params.author,
		limit = req.params.limit;

	mangaController.getMangasByAuthor(author, limit, function(response) {
		res.status(200).send(response);
	});
});

/*router.get({
		'/getMangasByAuthor/:author/:limit': function(req, res) {

			let author = req.params.author,
				limit = req.params.limit;

			mangaController.getMangasByAuthor(author, limit, function(response) {
				res.status(200).send(response);
			});
		}
	}
);*/

/*
 * GET
 *
 * Params
 * @string name 		: example "one piece"
 */
router.get('/getMangaByName/:name', function(req, res) {

	let name = req.params.name;

	mangaController.getMangaByName(name, function(response) {
		res.status(200).send(response);
	});
});

/*******************/
/*      INSERT     */
/*******************/

router.post('/insertManga', function(req, res) {

	let manga = req.body.manga;

	res.status(200).send(mangaController.insertManga(manga));
});

router.post('/insertAllMangas', function(req, res) {

	mangaController.insertAllMangas(function(response) {
		res.status(200).send(response);
	})
});

/*******************/
/*      DELETE     */
/*******************/

router.post('/deleteAllMangas', function(req, res) {

	mangaController.deleteAllMangas(function(response) {
		res.status(200).send(response);
	})
});

router.post('/deleteManga/:mangaId', function(req, res) {

	let mangaId = req.params.mangaId;

	res.status(200).send(mangaController.deleteManga(mangaId));
});

/*router.get('/getCloseMangasById', function(mangaId, limit) {
	return mangaController.getCloseMangasById(mangaId, limit);
});*/

module.exports = router;
