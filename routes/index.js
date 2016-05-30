var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	// Serve files from html sibling directory
  	var options = {
    	root: __dirname + '/../html/'
  	};

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash : true  
	}));

	/* Handle Weekly Results POST */
	router.post('/weekly-results', isAuthenticated, function(req, res) {
		console.log("POST weekly-results");
		res.render('weekly_results', { user: req.user });
	});

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/dashboard', //'/home',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		//res.render('home', { user: req.user });
		res.render('dashboard', { user: req.user });
		//res.sendFile('index.html', options);
		//res.render('index.html', { user: req.user }, options);
	});

	/* GET Dashboard Page */
	router.get('/dashboard', isAuthenticated, function(req, res) {
		console.log("got dashboard");
		res.render('dashboard', { user: req.user });
	});

	/* GET Weekly Results Page */
	router.get('/weekly-results', function(req, res) {
		console.log("got weekly results...");
		res.render('weekly_results', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		console.log( "The user ", { user: req.user }, "is logging out");
		req.logout();
		console.log("redirecting to login");
		res.redirect('/');
	});

	return router;
}





