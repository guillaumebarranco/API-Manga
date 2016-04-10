"use strict";

const functionClass = require('./../../ressources/functions'),
	functions = new functionClass()
	// request = require('request')
;

class mangaProvider {

	constructor() {

		this.mangas = [

			{
				name: "One Piece",
				authors: [{name: "Eiichiro Oda"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
				name: "Kingdom",
				authors: [{name: "Yasuhisa Hara"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
				name: "Feng Shen Ji",
				authors: [{name:"Zeng Jian He"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
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
			{
				name: "Magi The Labyrinth of Magic",
				authors: [{name:"Ohtaka Shinobu"}],
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
				nbBooks: 78,
				nbChapters: 300,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "DICE: The Cube that Changes Everything",
				authors: [{name:"Yun Hyun Suk"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "Toriko",
				authors: [{name:"Shimabukuro Mitsutoshi"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "OnePunch-Man",
				authors: [{name:"One"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "Kingdom",
				authors: [{name:""}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "Dr. Frost",
				authors: [{name:"Lee Jong-bym"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
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
			{
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
			{
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
			{
				name: "Akame Ga Kill",
				authors: [{name:"Takahiro"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "Boku No Hero Academia",
				authors: [{name:"Horikoshi Kouhei"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
				name: "Karate Shoukoushi Kohinata Minoru",
				authors: [{name:"Yasushi Baba"}],
				closeMangas: ["Kenichi"],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
				name: "Ginga Patrol Jako",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Beelzebub",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "GTO",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Captain Tsubasa",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Gamble fish",
				authors: [{name:"Aoyama Hiromi"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
				keywords: "",
				logo: "",
				mainHero: {
					name: "Tomy Shirasagi"
				},
				japaneseEditor: "",
				frenchEditor: "",
				nbBooks: ,
				nbChapters: 167,
				nbEpisodes: 0,
				publicationEnd: "null",
				publicationStart: "",
				type: "Ecchi"
			},
			{
				name: "Shingeki No Kyojin",
				authors: [{name:"Isayama Hajime"}],
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
				nbChapters: 80,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Tonari no Seki-kun",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Tower Of God",
				authors: [{name:"Slave In Utero"}],
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
				nbBooks: 0,
				nbChapters: 275,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{
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
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Crows",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
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
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
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
				japaneseEditor: "Weekly Shonen Jump",
				frenchEditor: "Glénat",
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Slam Dunk",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "Nanatsu No Taizai",
				authors: [{name:"Suzuki Nakaba"}],
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
				nbChapters: 167,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
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
			{
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
			{
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
			{
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
			{
				name: "Black Cat",
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
				nbBooks: 78,
				nbChapters: 822,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
				name: "City Hunter",
				frenchName: "City Hunter",
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
			{
				name: "Darwin's Game",
				authors: [{name:"Flipf lops"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "Bleach",
				authors: [{name:"Tite Kubo"}],
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
				nbChapters: 669,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "1994",
				type: "Shonen"
			},
			{
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
			{
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
			{
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
			{
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
			{
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
			{
				name: "Hinomaru Zumou",
				authors: [{name:"Kawada"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
				name: "Haikyū!!",
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
				nbBooks: ,
				nbChapters: ,
				nbEpisodes: 0,
				publicationEnd: null,
				publicationStart: "",
				type: "Shonen"
			},
			{
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
			{
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
			{
				name: "Fairy Tail",
				authors: [{name:"Hiro Mashima"}],
				closeMangas: ["Rave"],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "Shokugeki no Soma",
				authors: [{name:"Tsukuda Yuuto"}],
				closeMangas: [],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
				name: "Girls of The Wild's",
				authors: [{name:"Hun"}],
				closeMangas: ["Nisekoi"],
				description: "",
				hasAnime: true,
				isFinished: true,
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
			{
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
			{
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
			{
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
			{
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
			{
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
			{
				name: "Blazing Ninjaman",
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
	}]

	getCloseMangasById(mangaId, limit) {

		let response = {};
		response.status = 'success';

		for(var manga of this.mangas) {
			if(manga.id === mangaId) {
				res]ponse.closeMangas = ]manga.closeMangas;
				return response;
			}
		}

		response.message = 'Close mangas not found';
		response.status = 'error';
		return response;
	}

	insertManga(manga) {
		console.log(request);
	}
}

module.exports = mangaProvider;
