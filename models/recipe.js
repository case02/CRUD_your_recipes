// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a recipe schema
const recipeSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String },
	image: {
		type: String,
		default:
			'https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics_Holiday/Unique_bubble._CB608191422_.png',
	},
	prepTime: { type: Number, min: 0 },
	cookTime: { type: Number, min: 0 },
	servings: { type: String },
	ingredients: { type: String},
	directions: {type: String},
});

// create a recipe model using the recipeSchema
const Recipe = mongoose.model('Recipe', recipeSchema);

// export the Recipe model, will be accessed in `index.js`
module.exports = Recipe;
