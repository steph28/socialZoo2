var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  nameZoo : {
    type : String,
    unique : true,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  avatar : String,
  image : String
});
mongoose.model('User', userSchema);
