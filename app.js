"use strict";

const 
	// express = require('express'),
	mangaClass = require('./app/routes/mangas'),
	routeMangas = new mangaClass()
;

// const responseByType = routeMangas.getMangasByType('shonen', 2);
const responseByName = routeMangas.getMangaByName('Naruto');
// const responseCloseMangas = routeMangas.getCloseMangasById(1, 2);

// console.log(responseByType);
console.log(responseByName);
// console.log(responseCloseMangas);

// const responseAll = routeMangas.getAllMangas({order: 'Z-A'});

// const insert = routeMangas.insertManga('test');
console.log(responseByName);
