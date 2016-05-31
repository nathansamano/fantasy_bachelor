
var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
	id: String,
	username: String,
	password: String,
	displayName: String,
	score: Number,
	currentPicks: [String],
	week1Picks: [String],
	week2Picks: [String],
	week3Picks: [String],
	week4Picks: [String],
	week5Picks: [String],
	week6Picks: [String],
	week7Picks: [String],
	week8Picks: [String],
	week9Picks: [String],
	week10Picks: [String]
});