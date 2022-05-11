const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id: {type: Number, unique: true},
  repo_name: String,
  repo_size: Number,
  views: Number
  create_date: Date,
  update_date: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (databaseData) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.update({_id: someId}, {the rest of the stuff besides the id})//error-first-callback)
}

module.exports.save = save;