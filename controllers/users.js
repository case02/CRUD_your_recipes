// dependencies
const express = require('express');
const router = express.Router();
const db = require('../models');

// show user 
router.get('/users', (req, res) => {
	// query recipes from the database
	db.User.find({}, (err, user) => {
		// render `index.ejs` after data has been queried
		// res.send(entries)
		res.render('showUser', {
			user: user,
			tabTitle: 'User',
		});
	});
});

//create user route
router.post('/', (req, res) => {
	db.User.create(req.body, (err, user) => {
		res.redirect('/user/users');
	});
});

// new user
router.get('/new', (req, res) => {
	db.User.find({}, (err, user) => {
		res.render('signIn', {
			tabTitle: 'Create User',
			user: user,
		});
	});
});





// // Index Route: GET localhost:3000/users/
// router.get('/', (req, res) => {
// 	db.User.find({}, (err, users) => {
// 		res.json(users);
// 	});
// });

// // Create Route: POST localhost:3000/users/
// router.post('/', (req, res) => {
// 	db.User.create(req.body, (err, user) => {
// 		res.json(user);
// 	});
// });

// export routes so they are accessible in `server.js`
module.exports = router;
