const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

console.log(process.argv)

const place = process.argv[2]

if(!place){
    return console.log('Please provide place as an cmd argument')
}

geocode(place, (error, data) =>{

    if (error){
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
        })
})