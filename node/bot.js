console.log("hello bot");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = {
  q: '#jadavpuruniversity',
  count: 2
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
