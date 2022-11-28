// dependencies
const express = require('express');
const router = express.Router();
const db = require('../models');

// Index Route: GET localhost:3000/users/
router.get('/', (req, res) => {
	db.User.find({}, (err, users) => {
		res.json(users);
	});
});

// Create Route: POST localhost:3000/users/
router.post('/', (req, res) => {
	db.User.create(req.body, (err, user) => {
		res.json(user);
	});
});

// export routes so they are accessible in `server.js`
module.exports = router;
