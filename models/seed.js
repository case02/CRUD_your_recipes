const db = require('./');

const initialRecipes = [
	{
		name: 'Game Controller',
		image:
			'https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics_Holiday/CEholiday_Gaming-bubble_sobee_320x320_V2png._CB606115101_.png',
		description: 'a game controller...',
		price: 25,
		qty: 10,
	},
	{
		name: 'Fitness Watch',
		image:
			'https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics_Holiday/Fitness_Tech_Shoveler_v2._CB606115101_.png',
		description: 'a watch...',
		price: 25,
		qty: 10,
	},
	{
		name: 'Headphones',
		image:
			'https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics_Holiday/Audio_Shoveler._CB606137271_.png',
		description: 'headphones...',
		price: 25,
		qty: 10,
	},
	{
		name: 'Phone',
		image:
			'https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics_Holiday/Sustainable_bubble._CB608191422_.png',
		price: 25,
		qty: 10,
	},
	{
		name: 'Thingy-Majig',
		image:
			'https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics_Holiday/Unique_bubble._CB608191422_.png',
		description: 'a...not too sure',
		price: 25,
		qty: 10,
	},
	{
		name: 'Tablet',
		image:
			'https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics_Holiday/Laptops__Tablets_bubble._CB608191422_.png',
		description: 'a tablet...',
		price: 25,
		qty: 10,
	},
];

// delete/create initial seed records
db.Recipe.deleteMany({}, (err, recipes) => {
	if (err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('Removed all products');

		db.Recipe.insertMany(initialRecipes, (err, products) => {
			if (err) {
				console.log('Error occured in insertMany', err);
			} else {
				console.log('Created', products.length, 'products');
				process.exit()
			}
		});
	}
});
