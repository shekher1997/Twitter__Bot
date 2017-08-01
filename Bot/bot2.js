console.log("Twitter Bot Initiating...");

// console.log(" ");
// console.log(" ");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var postparams = {
     status: 'twitter_bot_test3!', 
}

T.post('statuses/update', postparams, postData);

function postData(err, data, response) {
    if (err){
        console.log("Something went wrong!")
    }
    else{
        console.log("Done!");
    }
//    console.log(data); 
}

// T.post('statuses/update', { status: 'twitterbot' }, function(err, data, response) {
//   console.log(data)
// })
