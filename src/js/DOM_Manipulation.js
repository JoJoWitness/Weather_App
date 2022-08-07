import Clear from "../images/sunny.svg"
import Clouds_Sun from "../images/cloudyWithSun.svg"
import Cloudy from "../images/cloudy.svg"
import Snowy from "../images/snowy.svg"
import Rain from "../images/rain.svg"
import Thunderstorm from "../images/thunderstorm.svg"
import RainyThunderstorm from "../images/rainyThunderstorm.svg"
import Night from "../images/night.svg"
import Clouds_Night from "../images/nightWithClouds.svg"
import Mist from "../images/mist.svg"
import {format} from 'date-fns'


function getDOM_Element(weatherData, city, state){
    getLeft_Elements(weatherData, city, state);
    getRight_Elements(weatherData)
    getHourlyElement(weatherData)
}

function getLeft_Elements(weatherData, city, state){
    let cityName = document.querySelector('.js-cityName');
    let weatherLike = document.querySelector('.js-WeatherLike')
    let temperature = document.querySelector('.js-Temperature');

    cityName.textContent = city;
    let weather= weatherData.current.weather[0].main
    weatherLike.src = getImage(weather);
    temperature.textContent= parseInt(weatherData.current.temp) + '°c'
    
}

function getRight_Elements(weatherData){
    let feelsLike = document.querySelector('.js-feelsLike');
    let rainPercent = document.querySelector('.js-rainPercent');
    let humidity = document.querySelector('.js-humidity');
    let windVelocity = document.querySelector('.js-windVelocity');
    let uvRays = document.querySelector('.js-UvRays')

    feelsLike.textContent= parseInt(weatherData.current.feels_like) + '°c'
   
    rainPercent.textContent= weatherData.hourly[0].pop * 100 + '%'
   
    humidity.textContent= weatherData.hourly[0].humidity + '%'

    windVelocity.textContent= weatherData.hourly[0].wind_speed + 'kmh'

    uvRays.textContent= parseInt(weatherData.hourly[0].uvi)

}

function getImage(weatherLike){
    console.log('cat')
    let img;
    switch(weatherLike){
        case 'Clear': 
            img = Clear;
            break;
        // case 'Clouds':
        //      if(Clouds){
        //          img=Cloudy
        //      }
        //      break;
        case 'Snow':
            img = Snowy
            break;
        case 'Rain':
            img = Rain;
            break;
        case 'Drizzle':
            img = Rain;
            break;
        case 'Thunderstorm':
            img = Thunderstorm;
            break;
        default:
            img = Mist
    }
    return img
}

function getHourlyElement(weatherData){
    const ol = document.querySelector('.js-ol')
    for(let i = 1 ; i <= 24; i++){
        let time = weatherData.hourly[i].dt;
        console.log(time, i, '1')
        let timeFormated = format(time, 'MMM/d/Y')
        console.log(timeFormated, i)
        let temperature = parseInt(weatherData.hourly[i].temp);
        console.log(temperature)
        let weather = weatherData.hourly[i].weather[0].main;
        ol.append(createHourlyElement(timeFormated, temperature, weather))
    }

}

function createHourlyElement(time, temperature, weatherImg){
    const li = document.createElement('li')
    li.className = 'hourlyWeatherElement';
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const img = document.createElement('img')
    img.className = "WeatherLike"

    p1.textContent = time;
    p2.textContent = temperature + '°c';
    img.src = getImage(weatherImg)

    li.append(p1)
    li.append(p2)
    li.append(img)

    return li
}

export default getDOM_Element