console.log("hello twitter bot");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = {
  q: 'jadavpur university since:2017-07-27',
  count: 20
}

T.get('search/tweets', params, goData);

function goData(err, data, response) {
  var tweet = data.statuses;
  for (var i = 0; i < tweet.length; i++) {
    console.log(tweet[i].text);
  }
}

// function goData(err, data, response) {
//     console.log(data);
// }
