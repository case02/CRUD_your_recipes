const db = require('../models');
const express = require('express');
const router = express.Router();

// SEED Route: When accessed this route will execute the function below and seed database. First it will delete any reoccuring data and then repopulate.
router.get('/seed', async (req, res) => {
    const initialRecipes = [
			{
				name: 'Chinese Chicken Lettuce Wraps',
				image: 'https://i.imgur.com/46FMP2p.jpg',
				description:
					'Chicken, black beans, zesty tomatoes, and taco seasoning cooked together with brown rice make for an easy burrito skillet you have to serve at your Cinco de Mayo celebration! This delicious dish is also perfect for a crowd-pleasing weeknight dinner idea.',
				prepTime: 15,
				cookTime: 15,
				servings: 6,
				ingredients: [
					'2 cups, 4 handfuls, fresh shiitake mushrooms',
					'1 1/3 to 1 1/2 pounds thin cut chicken breast or chicken tenders',
					'2 tablespoons light colored oil, such as vegetable oil or peanut oil',
					'Coarse salt and coarse black pepper',
					'3 cloves garlic, chopped',
					'1 inch ginger root, finely chopped or grated, optional',
					'1 orange, zested',
					'1/2 red bell pepper, diced small',
					'1 small tin, 6 to 8 ounces, sliced water chestnuts, drained and chopped',
					'3 tablespoons hoisin, Chinese barbecue sauce, available on Asian foods aisle of market',
					'1/2 large head iceberg lettuce, core removed, head quartered',
				],
				directions: [
					'Remove tough stems from mushrooms and brush with damp towel to clean, Slice mushrooms. Chop chicken into small pieces.',

					'Preheat a large skillet or wok to high.',

					'Add oil to hot pan. Add chicken to the pan and sear meat by stir frying a minute or 2. Add mushrooms and cook another minute or two. Add salt and pepper to season, then garlic and ginger. Cook a minute more. Grate zest into pan, add bell pepper bits, chopped water chestnuts and scallions. Cook another minute, continuing to stir fry mixture. Add hoisin Chinese barbecue sauce and toss to coat the mixture evenly. Transfer the hot chopped barbecued chicken to serving platter and pile the quartered wedges of crisp iceberg lettuce along side. Add wedged oranges to platter to garnish. To eat, pile spoonfuls into lettuce leaves, wrapping lettuce around fillings and squeeze an orange wedge over.',
				],
				source:
					'https://www.foodnetwork.com/recipes/rachael-ray/barbecued-chinese-chicken-lettuce-wraps-recipe-1915308',
			},
			{
				name: 'CHICKEN BURRITO SKILLET',
				image: 'https://i.imgur.com/BR9ztTc.jpg',
				description:
					'Chicken, black beans, zesty tomatoes, and taco seasoning cooked together with brown rice make for an easy burrito skillet you have to serve at your Cinco de Mayo celebration! This delicious dish is also perfect for a crowd-pleasing weeknight dinner idea.',
				prepTime: 15,
				cookTime: 15,
				servings: 6,
				ingredients: [
					'2 tablespoons canola oil',
					'1 pound boneless skinless chicken breasts, cut into bite-size pieces',
					'1/2 cup chopped yellow onion',
					'2 tablespoons taco seasoning mix (from 1.25-oz pkg)',
					'1 can (15 oz each) Rosarita® Premium Whole Black Beans, drained, rinsed',
					'1 can (10 oz each) Ro*Tel® Original Diced Tomatoes & Green Chilies, undrained',
					'1 cup water',
					'1-1/4 cups instant brown rice, uncooked',
					'1 cup shredded Cheddar and Monterey Jack cheese blend',
					'Chopped cilantro, optional',
				],
				directions: [
					'Heat oil in large skillet over medium-high heat. Add chicken and cook 3 minutes, stirring occasionally. Add onion and taco seasoning; cook 2 minutes more. Stir in black beans, undrained tomatoes and water; bring to a boil.',

					'Stir in rice. Cover, reduce heat and simmer 7 to 10 minutes or until rice is tender. Stir in 1/2 cup cheese. Sprinkle top with remaining cheese and cilantro, if desired.',
				],
				source:
					'https://www.readyseteat.com/recipes-Chicken-Burrito-Skillet-7722',
			},
			{
				name: 'BEEF AND BROCCOLI',
				image: 'https://i.imgur.com/Cxg1obB.jpg',
				description:
					'Beef and Broccoli is an easy, 1-pan, 30-minute meal that is loaded with fresh broccoli, tender nutrition-packed beef, and the best stir fry sauce.',
				prepTime: 17,
				cookTime: 13,
				servings: 4,
				ingredients: [
					'1 lb flank steak, very thinly sliced into bite-sized strips',
					'2 Tbsp olive oil , (or vegetable oil), divided',
					'1 lb broccoli, (cut into 6 cups of florets)',
					'2 tsp sesame seeds, optional garnish',
					'1 tsp fresh ginger, grated (loosely packed)',
					'2 tsp garlic, grated (from 3 cloves',
					'1/2 cup hot water',
					'6 Tbsp low sodium soy sauce, (or GF Tamari)',
					'3 Tbsp packed light brown sugar',
					'1 1/2 Tbsp corn starch',
					'1/4 tsp black pepper',
					'2 Tbsp sesame oil',
				],
				directions: [
					"Start cooking white rice first so it's ready when the stir fry is done. Cover and freeze steak 30 minutes for easier slicing.",

					'Combine all stir fry sauce ingredients in a bowl, stir well to dissolve the sugar, and set aside.',

					'Place a large skillet over medium heat and add 1 Tbsp oil.  Add broccoli florets and sauté 4-5 minutes, partially covered with lid, stirring or tossing several times until broccoli is bright green and crisp-tender then remove from pan. Tip: If you prefer softer broccoli, add 2 Tbsp water before covering with the lid and it will steam cook the broccoli.',

					'Increase heat to high heat and add 1 Tbsp oil. Add beef in a single layer and sauté 2 minutes per side or just until cooked through. Quickly pull out a piece to test for doneness.',

					'Add the sauce, reduce heat to medium/low and simmer 3-4 minutes. It will thicken. Add broccoli and stir to combine. Stir in 1-2 Tbsp water to thin the sauce if desired. Serve over white rice.',
				],
				source: 'https://natashaskitchen.com/beef-and-broccoli/',
			},
		];

    db.Recipe.deleteMany({}, (err, recipes) => {
			if (err) {
				res.send(ERROR);
			} else {
				db.Recipe.create(initialRecipes, (err, recipe) => {
					if (err) {
						res.send(ERROR)
					} else {
						res.redirect('/');
					}
				});
			}
		});
})

// new Recipe ejs
router.get('/new', (req, res) => {
	res.render('newRecipe', {
		tabTitle: 'New Recipe'
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
        res.render("editRecipe", {
            recipe: recipe,
            tabTitle: 'Edit',
        })
    })
})



module.exports = router;
