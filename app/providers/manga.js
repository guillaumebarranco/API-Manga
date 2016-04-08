"use strict";

const functionClass = require('./../../ressources/functions'),
	functions = new functionClass();

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
			},
			{
				name: "Eyeshield 21"
			},
			{
				name: "Bakuman"
			},
			{
				name: "Pretty Face"
			},
			{
				name: "Dragon Ball"
			},
			{
				name: "Feng Shen Ji"
			},
			{
				name: "Jackals"
			},
			{
				name: "Red Storm"
			},
			{
				name: "Magi The Labyrinth of Magic"
			},
			{
				name: "DICE: The Cube that Changes Everything"
			},
			{
				name: "Toriko"
			},
			{
				name: "OnePunch-Man"
			},
			{
				name: "Kingdom"
			},
			{
				name: "Dr. Frost"
			},
			{
				name: "Satan 666"
			},
			{
				name: "Worst"
			},
			{
				name: "Yu-Gi-Oh"
			},
			{
				name: "All You Need Is Kill"
			},
			{
				name: "Akame Ga Kill"
			},
			{
				name: "Boku No Hero Academia"
			},
			{
				name: "Yu Yu Hakusho"
			},
			{
				name: "Karate Shoukoushi Kohinata Minoru"
			},
			{
				name: "The Gamer"
			},
			{
				name: "Black Clover"
			},
			{
				name: "Nisekoi"
			},
			{
				name: "Noblesse"
			},
			{
				name: "Death Note"
			},
			{
				name: "Assassination Classroom"
			},
			{
				name: "Hunter X Hunter"
			},
			{
				name: "Fullmetal Alchemist"
			},
			{
				name: "Ginga Patrol Jako"
			},
			{
				name: "Beelzebub"
			},
			{
				name: "GTO"
			},
			{
				name: "Captain Tsubasa"
			},
			{
				name: "Gamble fish"
			},
			{
				name: "Shingeki No Kyojin"
			},
			{
				name: "Tonari no Seki-kun"
			},
			{
				name: "Tower Of God"
			},
			{
				name: "Dreamland"
			},
			{
				name: "Crows"
			},
			{
				name: "Claymore"
			},
			{
				name: "Puella Magi Madoka Magica"
			},
			{
				name: "Slam Dunk"
			},
			{
				name: "Nanatsu No Taizai"
			},
			{
				name: "Détective Conan"
			},
			{
				name: "Ashita No Joe"
			},
			{
				name: "Gamaran"
			},
			{
				name: "Terra Formars"
			},
			{
				name: "Black Cat"
			},
			{
				name: "Nicky Larson"
			},
			{
				name: "Darwin's Game"
			},
			{
				name: "Bleach"
			},
			{
				name: "World Trigger"
			},
			{
				name: "Hikaru No Go"
			},
			{
				name: "Saru Lock"
			},
			{
				name: "The Breaker"
			},
			{
				name: "Shaman king"
			},
			{
				name: "Hinomaru Zumou"
			},
			{
				name: "Asu No Yoichi"
			},
			{
				name: "Doubt"
			},
			{
				name: "Young GTO"
			},
			{
				name: "Rave"
			},
			{
				name: "Kubera"
			},
			{
				name: "Haikyū!!"
			},
			{
				name: "Kuroko No Basket"
			},
			{
				name: "Code:breaker"
			},
			{
				name: "Fairy Tail"
			},
			{
				name: "Shokugeki no Soma"
			},
			{
				name: "Girls of The Wild's"
			},
			{
				name: "Hi No Tori"
			},
			{
				name: "Prince of Tennis"
			},
			{
				name: "Lui Ou Rien"
			},
			{
				name: "Reborn"
			},
			{
				name: "Blue Dragon"
			},
			{
				name: "Blazing Ninjaman"
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
}

module.exports = mangaProvider;
