const db = require('../models');
const express = require('express');
const router = express.Router();

// new Recipe
router.get('/new', (req, res) => {
	res.render('newRecipe', {
		tabTitle: 'New Recipe',
	});
});

//show recipe
router.get('/:id', (req, res) => {
	db.Recipe.findById(req.params.id, (err, recipe) => {
        // res.send(req.params)
		res.render('showRecipe', {
			recipe: recipe,
			tabTitle: 'Item',
		});
	});
});


//create recipe route
router.post('/', (req, res) => {
	db.Recipe.create(req.body, (err, recipe) => {
		res.redirect('/');
	});
});


// Delete route
router.delete('/:id', (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id, (err, recipe) => {
        res.redirect('/')
    })
})


// update route
router.put('/:id', (req, res) => {
    db.Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, recipe) => {
        res.redirect('/recipe/' + recipe._id)
        // res.send(recipe)
    })
})

// edit ejs
router.get('/:id/edit', (req, res) => {
    db.Recipe.findById(req.params.id, (err, recipe) => {

        console.log(recipe)
        res.render("editRecipe", {
            recipe: recipe,
            tabTitle: 'Edit'
        })
    })
})

// // buy route
// router.put('/:id/buy', (req, res) => {
//     db.REcipe.findByIdAndUpdate(req.params.id, {qty: req.body.qty - 1}, { new: true }, (err, recipe) => {
//         // res.send(req.body)
//         res.redirect('/recipe/' + recipe._id)
//     })
// })
// router.get('/:id/buy', (req, res) => {
//     db.Recipe.findById(req.params.id, (err, recipe) => {
//         res.render("yourRecipe", {
//             recipe: recipe,
//             tabTitle: "Buy"
//         })
//     })
// })

module.exports = router;
