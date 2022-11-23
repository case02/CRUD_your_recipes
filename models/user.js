// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a recipe schema
const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String },
	password: { type: String },
});

// create a User model using the userSchema
const User = mongoose.model('User', userSchema);

// export the User model, will be accessed in `index.js`
module.exports = User;
