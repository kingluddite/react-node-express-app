const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});

// Create a Mongo Model class
// And tell mongoose that it needs to be aware that this new collection
// needs to be created
mongoose.model('User', userSchema);
