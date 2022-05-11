const express = require('express');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
let app = express();
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.user)
    .then((res) => {
      return Promise.all(
        res.data.map(({ id: repo_id, name: repo_name, owner: { login: username }, created_at: create_date, updated_at: update_date }) => {
          repos = { repo_id, repo_name, username, create_date, update_date }
          console.log( 'after mapping', repos)
          //return the function call to database insert func
        })
      )
    })
    .catch((err) => {
      console.log(`Status Code ${err.request.res.statusCode}, ${err.request.res.responseUrl} ${err.request.res.statusMessage} - GitHub API Documentation Can Be Found At ${err.response.data.documentation_url}`)
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

