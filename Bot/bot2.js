console.log("Twitter Follow Bot Initiating...");

// console.log(" ");
// console.log(" ");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


//setting up a user stream.
var stream = T.stream('user');

//anytime someone follows me.
stream.on('follow', followed);

function followed(eventMsg) {
    console.log('Follow event.')
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.screen_name;
    tweetIt('. @' + screenName + ' thanks for following.');
}



// tweetIt();
// setInterval(tweetIt, 1000 * 20);

function tweetIt(txt) {
    // var r = Math.floor(Math.random() * 100);

    var postparams = {
        // status: r + ' Aha!My twitter bot is working.'
        status: txt
    }

    T.post('statuses/update', postparams, postData);

    function postData(err, data, response) {
        // if (err){
        //     // console.log("Something went wrong!")
        //     console.log(data);
        // }
        // else{
        //     console.log("Done!");
        // }
        console.log(data);
    }

    // T.post('statuses/update', { status: 'twitterbot' }, function(err, data, response) {
    //   console.log(data)
    // })

}
