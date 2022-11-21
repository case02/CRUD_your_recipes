const db = require('../models');
const express = require('express');
const router = express.Router();

// new product
router.get('/new', (req, res) => {
	res.render('newProduct', {
		tabTitle: 'New Product',
	});
});

//show product
router.get('/:id', (req, res) => {
	db.Product.findById(req.params.id, (err, product) => {
        // res.send(req.params)
		res.render('showProduct', {
			product: product,
			tabTitle: 'Item',
		});
	});
});

// create route
router.post('/', (req, res) => {
	db.Product.create(req.body, (err, product) => {
		res.redirect('/');
	});
});


//create product route
router.post('/', (req, res) => {
	db.Product.create(req.body, (err, product) => {
		res.redirect('/');
	});
});


// Delete route
router.delete('/:id', (req, res) => {
    db.Product.findByIdAndDelete(req.params.id, (err, product) => {
        res.redirect('/')
    })
})


// update route
router.put('/:id', (req, res) => {
    db.Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, product) => {
        res.redirect('/product/' + product._id)
        // res.send(product)
    })
})

// edit ejs
router.get('/:id/edit', (req, res) => {
    db.Product.findById(req.params.id, (err, product) => {
        res.render("editProduct", {
            product: product,
            tabTitle: 'Edit'
        })
    })
})

// buy route
router.put('/:id/buy', (req, res) => {
    db.Product.findByIdAndUpdate(req.params.id, {qty: req.body.qty - 1}, { new: true }, (err, product) => {
        // res.send(req.body)
        res.redirect('/product/' + product._id)
    })
})
router.get('/:id/buy', (req, res) => {
    db.Product.findById(req.params.id, (err, product) => {
        res.render("buyProduct", {
            product: product,
            tabTitle: "Buy"
        })
    })
})

module.exports = router;
