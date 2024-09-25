const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb+srv://kakuralasrisailam:V9FGL5nMSOOeN2oV@tibcluster.8qi9c.mongodb.net/?retryWrites=true&w=majority&appName=tibCluster");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  skills: [],
  profileimg: {
    type: String,
    default: "def.jpg"
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  following:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  bio: String,
  clgname: String,
  branch: String,
  github: String,
  linkedin: String,
  instagram: String
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);