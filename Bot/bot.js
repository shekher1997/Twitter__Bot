console.log("Twitter Bot Initiating...");

console.log(" ");
console.log(" ");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = {
  q: 'The Big Bang Theory since:2017-07-27',
  count: 30
}

T.get('search/tweets', params, goData);

function goData(err, data, response) {
  var tweet = data.statuses;
  for (var i = 0; i < tweet.length; i++) {
    console.log(tweet[i].text);
    console.log(" ");
    console.log(" ");
  }
}

// function goData(err, data, response) {
//     console.log(data);
// }
