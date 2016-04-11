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

			{ // One Piece
				name: "One Piece",
				authors: [{name: "Eiichiro Oda"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Monkey D. Luffy"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1997",
				type: "Shonen"
			},
			{ // Naruto
				name: "Naruto",
				authors: [{name: "Masashi Kishimoto"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "ninja",
				logo: "",
				mainHero: {
					name: 'Naruto'
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 72,
				nbChapters: 700,
				nbEpisodes: 0,
				publicationEnd: "2014",
				publicationStart: "1999",
				type: "Shonen"
			},
			{ // Kingdom
				name: "Kingdom",
				authors: [{name: "Yasuhisa Hara"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "war, general",
				logo: "",
				mainHero: {
					name: 'Shin'
				},
				japaneseEditor: "",
				frenchEditor: "Glénat",
				nbBooks: 42,
				nbChapters: 469,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "2006",
				type: "Seinen"
			},
			{ // Kenichi
				name: "Kenichi",
				authors: [{name:"Matsuena Syun"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "martial arts, fight",
				logo: "",
				mainHero: {
					name: 'Shirahama Kenichi'
				},
				japaneseEditor: "Weekly Shonen Sunday",
				frenchEditor: "Glénat",
				nbBooks: 61,
				nbChapters: 583,
				nbEpisodes: 0,
				publicationEnd: "2014",
				publicationStart: "2002",
				type: "Ecchi"
			},
			{ // Kenshin le Vagabond
				name: "Kenshin le Vagabond",
				authors: [{name:"Nobuhiro Watsuki"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "samourai, samurai, sword, vagabond",
				logo: "",
				mainHero: {
					name:  'Kenshin Himura'
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 28,
				nbChapters: 500,
				nbEpisodes: 0,
				publicationEnd: "1999",
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Eyeshield 21
				name: "Eyeshield 21",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "sport, american football",
				logo: "",
				mainHero: {
					name: "Kobayakawa Sena"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 37,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "2000",
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Bakuman
				name: "Bakuman",
				authors: [
					{name: "Takeshi Obata"},
					{name: "Tsugumi Ohba"}
				],
				closeMangas: [],
				description: "manga, editor",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Saiko"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 20,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Pretty Face
				name: "Pretty Face",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Masashi Rando"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 6,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: 'null',
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Dragon Ball
				name: "Dragon Ball",
				authors: [{name:"Akira Toriyama"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Sangoku"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 42,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: 'null',
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Feng Shen Ji
				name: "Feng Shen Ji",
				authors: [{name:"Zeng Jian He"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "gods, manhua",
				logo: "",
				mainHero: {
					name: "Ah Gou"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 180,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Jackals
				name: "Jackals",
				authors: [{name:"Kim Byung Jin"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Alligator"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 6,
				nbChapters: 56,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Seinen"
			},
			{ // Red Storm
				name: "Red Storm",
				authors: [{name:"Cyungchan Noh"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 189,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Magi
				name: "Magi The Labyrinth of Magic",
				authors: [{name:"Ohtaka Shinobu"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 78,
				nbChapters: 300,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // DICE
				name: "DICE: The Cube that Changes Everything",
				authors: [{name:"Yun Hyun Suk"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Dongtae"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 134,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Toriko"
				name: "Toriko",
				authors: [{name:"Shimabukuro Mitsutoshi"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "food, gourmet, animals",
				logo: "",
				mainHero: {
					name: "Toriko"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 366,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // OnePunch-Man
				name: "OnePunch-Man",
				authors: [{name:"One"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Saitama"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 2,
				nbChapters: 98,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Kingdom
				name: "Kingdom",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Shin"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Dr. Frost
				name: "Dr. Frost",
				authors: [{name:"Lee Jong-bym"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Dr Frost"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 87,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Satan 666
				name: "Satan 666",
				authors: [{name:"Kishimoto"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Jio Freed"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 19,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Worst
				name: "Worst",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Hana Tsukihima"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Yu-Gi-Oh
				name: "Yu-Gi-Oh",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Yugi Muto"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 37,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // All You Need Is Kill
				name: "All You Need Is Kill",
				authors: [
					{name: "Takeshi Obata"},
					{name: "Tsugumi Ohba"}
				],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 2,
				nbChapters: 17,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Akame Ga Kill
				name: "Akame Ga Kill",
				authors: [{name:"Takahiro"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Tatsumi"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 69,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Seinen"
			},
			{ // Boku No Hero Academia
				name: "Boku No Hero Academia",
				authors: [{name:"Horikoshi Kouhei"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "hero, super heroes",
				logo: "",
				mainHero: {
					name: "Midoriya Izuku"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 86,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Yu Yu Hakusho
				name: "Yu Yu Hakusho",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Yusuke Urameshi"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Karate Shoukoushi
				name: "Karate Shoukoushi Kohinata Minoru",
				authors: [{name:"Yasushi Baba"}],
				closeMangas: ["Kenichi"],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Kohinata Minoru"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 388,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // The Gamer
				name: "The Gamer",
				authors: [{name:"Sung San-Young"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 78,
				nbChapters: 123,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Black Clover
				name: "Black Clover",
				authors: [{name:"Tabata Yuuki"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Aster"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 51,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "2015",
				type: "Shonen"
			},
			{ // Nisekoi
				name: "Nisekoi",
				authors: [{name:"Komi Naoshi"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 212,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Noblesse
				name: "Noblesse",
				authors: [
					{name:"Son Jae-Ho"},
					{name: "Lee Gwang-Su"}
				],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Cadis Etrama Di Raizel"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 400,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Death Note
				name: "Death Note",
				authors: [
					{name: "Takeshi Obata"},
					{name: "Tsugumi Ohba"}
				],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Raito Yagami"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 12,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Assassination Classroom
				name: "Assassination Classroom",
				authors: [{name:"Matsui Yuusei"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Korosensei"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Hunter X Hunter
				name: "Hunter X Hunter",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Gon Freecs"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Fullmetal Alchemist
				name: "Fullmetal Alchemist",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Edward Elric"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "null",
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Ginga Patrol Jako
				name: "Ginga Patrol Jako",
				authors: [{name:"Akira Toriyama"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Jako"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 12,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Beelzebub
				name: "Beelzebub",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Oga Tatsumi"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // GTO
				name: "GTO",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Eiikichi Onizuka"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Captain Tsubasa
				name: "Captain Tsubasa",
				frenchName: "Olive Et Tom",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "sport, football",
				logo: "",
				mainHero: {
					name: "Tsubasa Ohzora"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Gamble fish
				name: "Gamble fish",
				authors: [{name:"Aoyama Hiromi"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Tomu Shirasagi"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 167,
				nbEpisodes: 0,
				publicationEnd: "null",
				publicationStart: "",
				type: "Ecchi"
			},
			{ // Shingeki No
				name: "Shingeki No Kyojin",
				authors: [{name:"Isayama Hajime"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 80,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Tonari no Seki-kun
				name: "Tonari no Seki-kun",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Seki"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Tower Of God
				name: "Tower Of God",
				authors: [{name:"Slave In Utero"}],
				closeMangas: [],
				description: "",
				hasAnime: false,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 275,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Dreamland
				name: "Dreamland",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 14,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Crows
				name: "Crows",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Boya Harumichi"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Claymore
				name: "Claymore",
				authors: [{name:"Yagu Norihiro"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Claire"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 155,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Puella Magi
				name: "Puella Magi Madoka Magica",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Madoka Kaname"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Slam Dunk
				name: "Slam Dunk",
				authors: [{name:""}],
				closeMangas: ["Kuroko No Basket", "Crows"],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "basket, sport",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Nanatsu No Taizai
				name: "Nanatsu No Taizai",
				authors: [{name:"Suzuki Nakaba"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "M"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 167,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Détective Conan
				name: "Détective Conan",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Shinichi Kudo"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Ashita No Joe
				name: "Ashita No Joe",
				authors: [{name:"Takamori Asao"}],
				closeMangas: [],
				description: "sport, boxe",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Joe Yabuki"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 20,
				nbChapters: 108,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Gamaran
				name: "Gamaran",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Gama"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Terra Formars
				name: "Terra Formars",
				authors: [{name:"Yu Sagusa"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 172,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Black Cat
				name: "Black Cat",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Train Heartnet"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // City Hunter
				name: "City Hunte",
				frenchName: "Nicky Larson",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Ryo Saeba"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Darwin's Game
				name: "Darwin's Game",
				authors: [{name:"Flipf lops"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Sudo Kaname"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 21,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "2015",
				type: "Shonen"
			},
			{ // Bleach
				name: "Bleach",
				authors: [{name:"Tite Kubo"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Ichigo Kurosaki"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 669,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // World Trigger
				name: "World Trigger",
				authors: [{name:"Daisuke Ashihara"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 129,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Hikaru No Go
				name: "Hikaru No Go",
				authors: [
					{name: "Takeshi Obata"},
					{name: "Tsugumi Ohba"}
				],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Hikaru"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 23,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "",
				publicationStart: "",
				type: "Shonen"
			},
			{ // Saru Lock
				name: "Saru Lock",
				authors: [{name:"Naoki Serizawa"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Yutaro Sarumaru"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 22,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: "null",
				publicationStart: "1994",
				type: "Seinen"
			},
			{ // The Breaker
				name: "The Breaker",
				authors: [
					{name:"Jeon Geuk-Jin"},
					{name: "Park Jin-Hwan"}
				],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Li Shioon"
				},
				japaneseEditor: "",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Shaman king
				name: "Shaman king",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Yo"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Hinomaru Zumou
				name: "Hinomaru Zumou",
				authors: [{name:"Kawada"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Ushio Hinomaru"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 61,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Asu No Yoichi
				name: "Asu No Yoichi",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Ecchi"
			},
			{ // Doubt
				name: "Doubt",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 6,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Seinen"
			},
			{ // Young GTO
				name: "Young GTO",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Eiikichi Onizuka"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Rave
				name: "Rave",
				authors: [{name:"Hiro Mashima"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Haru Glory"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 35,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Kubera
				name: "Kubera",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Kubera"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Haikyū!!
				name: "Haikyū!!",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "sport, volleyball",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Kuroko No Basket
				name: "Kuroko No Basket",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "sport",
				logo: "",
				mainHero: {
					name: "Kuroko"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Code:breaker
				name: "Code:breaker",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 200,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Fairy Tail
				name: "Fairy Tail",
				authors: [{name:"Hiro Mashima"}],
				closeMangas: ["Rave"],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "magic",
				logo: "",
				mainHero: {
					name: "Natsu Dragnir"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Shokugeki no Soma
				name: "Shokugeki no Soma",
				authors: [{name:"Tsukuda Yuuto"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Souma Yukihira"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 161,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Girls of The Wild's
				name: "Girls of The Wild's",
				authors: [{name:"Hun"}],
				closeMangas: ["Nisekoi"],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Song Jae Gu"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 230,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{ // Hi No Tori
				name: "Hi No Tori",
				authors: [{name:"Ozamu Tezuka"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Hino"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 21,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: ""
			},
			{ // Prince of Tennis
				name: "Prince of Tennis",
				authors: [{name:""}],
				closeMangas: ["Kuroko No Basket"],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "sport",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Lui Ou Rien
				name: "Lui Ou Rien",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "Glénat",
				nbBooks: 6,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shojo"
			},
			{ // Reborn
				name: "Reborn",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Reborn"
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Blue Dragon
				name: "Blue Dragon",
				authors: [
					{name:"Takeshi Obata"}
				],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{ // Blazing Ninjaman
				name: "Blazing Ninjaman",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: false,
				keywords: "",
				logo: "",
				mainHero: {
					name: ""
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: 0,
				nbChapters: 0,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
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

		let mangas = this.getMangas();

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
