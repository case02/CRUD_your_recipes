const db = require('./');

const initialRecipes = [
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
		source: 'https://www.readyseteat.com/recipes-Chicken-Burrito-Skillet-7722',
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

// delete/create initial seed records
db.Recipe.deleteMany({}, (err, recipes) => {
	if (err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('Removed all recipe');

		db.Recipe.insertMany(initialRecipes, (err, recipe) => {
			if (err) {
				console.log('Error occured in insertMany', err);
			} else {
				console.log('Created', recipe.length, 'recipe');
				process.exit()
			}
		});
	}
});
