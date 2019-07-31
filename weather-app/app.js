const request = require('request');
const llurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Minsk.json?access_token=pk.eyJ1Ijoic2FyZ2VydXMiLCJhIjoiY2p5cmQ0MjVuMDFpaDNjbXEwMmVnbzd4aiJ9.7QZfrMrXgU9IhlPRxoiYeg&limit=1';

let url = "";

request({url: llurl, json:true}, (error, response) => {
    setUrlParamters(response.body.features[0].center[1],response.body.features[0].center[0]);
    });

    setUrlParamters = function(latitude,longitude) {
        url = 'https://api.darksky.net/forecast/b6cec463447afd5055ffdcdde991ef36/' +
                longitude + ',' +
                latitude + '?' +
                'units=si';
    }

    //fucked up!

request({ url: url, json: true }, (error,response) => {
    if (error) {
        console.log('Unable to connet to weather service.');
    } else if (response.body.error) {
        console.log(response.body.error);
    } else { 
        console.log(response.body.daily.data[0].summary +
                ' It is currently ' + response.body.currently.temperature + 
                ' degrees out. There is a ' +  response.body.currently.precipProbability + 
                ' chance of rain.') 
    }

})

