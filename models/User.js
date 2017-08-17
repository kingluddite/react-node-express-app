const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

// Create a Mongo Model class
// And tell mongoose that it needs to be aware that this new collection
// needs to be created
mongoose.model('User', userSchema);
