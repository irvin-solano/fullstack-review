const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/YoohooYouYahoo/repos`,
    method: 'GET',
    headers: {
      'Accept': "application/vnd.github.v3+json",
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios(options) //must return without then/catch blocks for request err to be sent to the express catch block, otherwise, catch block here sends to then in express

}

module.exports.getReposByUsername = getReposByUsername;