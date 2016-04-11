"use strict";

const mangaClass = require('./app/routes/mangas'),
	express = require('express'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
;

var app = express();

app.use(cookieParser());
app.use(bodyParser());

app.enable('trust proxy');

/// .. other middleware .. doesn't matter what


// app.post(...);

// more middleware (executes after routes)
// app.use(function(req, res, next) {});


// const responseByType = routeMangas.getMangasByType('shonen', 2);
// const responseByName = routeMangas.getMangaByName('Nauruto');
// const responseCloseMangas = routeMangas.getCloseMangasById(1, 2);

// console.log(responseByType);
// console.log(responseByName);
// console.log(responseCloseMangas);
 
app.use('/mangas', require('./app/routes/mangas'));

// const responseAll = routeMangas.getAllMangas({order: 'Z-A'});
// console.log(responseAll);

var server = require('http').Server(app);

server.listen(1208, function() {
	// console.log('server started');
});
