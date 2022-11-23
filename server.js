// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const methodOverride = require('method-override');
const express = require('express');
const app = express();
const port = 3000;
// access models
const db = require('./models');
// access controllers
const recipesCtrl = require('./controllers/recipes');

// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
// set folder for static files
app.use(express.static('public'));
// sets the view engine to EJS for our app (this allows us to render EJS files without usind `.ejs` after file names)
app.set('view engine', 'ejs');
// method-override allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));
// body parser: used for POST/PUT/PATCH routes: this will take incoming strings from the body that are url encoded and parse them into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));

// +-+-+-+-+-+-+
// |R|O|U|T|E|S|
// +-+-+-+-+-+-+
// GET/Read Route: Redirects root route to `/pub` route
app.get('/', (req, res) => {
	res.redirect('/shop')
})
// Index Route (GET/Read): We'll leave this route in the server.js since it affects both models
app.get('/shop', (req, res) => {
	// query recipes from the database
	db.Recipe.find({}, (err, recipes) => {
			// render `index.ejs` after data has been queried
			// res.send(entries)
			res.render('index', {
				recipes: recipes,
				tabTitle: 'Shop | Home',
			});
		});
	});

// app.get('/recipe/:id', recipesCtrl.show)
app.use('/recipe', recipesCtrl);


// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(port, () => {
	console.log(`App is running at localhost:${port}`);
});
