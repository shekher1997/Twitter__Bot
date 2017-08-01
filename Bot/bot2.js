console.log("Twitter Bot Initiating...");

console.log(" ");
console.log(" ");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var postparams = {
     status: 'hello world!' 
}

T.post('statuses/update', postparams, postData);

function postData(err, data, response) {
  console.log(data);
}
