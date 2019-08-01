const request = require('request')

const encodeURLComponent = (component) => {
    return component
}

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b6cec463447afd5055ffdcdde991ef36/' 
                + encodeURLComponent(longitude) + ','
                + encodeURLComponent(latitude)
                + '?units=si'

    request({ url:url, json:true }, (error, response) => {
        if (error){
            callback('Unable to connet to weather service', undefined)
        } else if (response.body.error){
            callback(response.body.error, undefined)
        } else {
            callback(undefined,{
                forecast: response.body.daily.data[0].summary +
                          ' It is currently ' + response.body.currently.temperature + 
                          ' degrees out. There is a ' +  response.body.currently.precipProbability + 
                          ' chance of rain.'
            })
        }
    }
    )
}

module.exports = forecast

