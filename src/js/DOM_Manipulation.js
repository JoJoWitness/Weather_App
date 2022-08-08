import Sunny from "../images/sunny.svg"
import Clouds_Sun from "../images/cloudyWithSun.svg"
import Snowy from "../images/snowy.svg"
import Rain from "../images/rain.svg"
import Thunderstorm from "../images/thunderstorm.svg"
import Night from "../images/night.svg"
import Clouds_Night from "../images/nightWithClouds.svg"
import Mist from "../images/mist.svg"
import {format} from 'date-fns'
import selectClass from "./theme"


function getDOM_Element(weatherData, city){
    getLeft_Elements(weatherData, city);
    getRight_Elements(weatherData)
    getHourlyElement(weatherData)
}

function getLeft_Elements(weatherData, city){
    let cityName = document.querySelector('.js-cityName');
    let weatherLike = document.querySelector('.js-WeatherLike')
    let temperature = document.querySelector('.js-Temperature');

    cityName.textContent = city;
    let weather= weatherData.current.weather[0].main
    let time = weatherData.hourly[0].dt;
    let timeFormated = format(time*1000, 'HH')
    weatherLike.src = getImage(weather, timeFormated);
    selectClass(weather, timeFormated)
    temperature.textContent= parseInt(weatherData.current.temp) + '°c'
    
}

function getRight_Elements(weatherData){
    let feelsLike = document.querySelector('.js-feelsLike');
    let rainPercent = document.querySelector('.js-rainPercent');
    let humidity = document.querySelector('.js-humidity');
    let windVelocity = document.querySelector('.js-windVelocity');
    let uvRays = document.querySelector('.js-UvRays')

    feelsLike.textContent= parseInt(weatherData.current.feels_like) + '°c'
   
    rainPercent.textContent= parseInt(weatherData.hourly[0].pop * 100) + '%'
   
    humidity.textContent= weatherData.hourly[0].humidity + '%'

    windVelocity.textContent= weatherData.hourly[0].wind_speed + 'kmh'

    uvRays.textContent= parseInt(weatherData.hourly[0].uvi)

}

function getImage(weatherLike, timeImg){
    let img;
    const root = document.documentElement;
    switch(weatherLike){
        case 'Clear': 
            if(parseInt(timeImg) > 6 && parseInt(timeImg) < 19){
                img= Sunny;
            }
            else {
                img= Night
            };
            break;
        case 'Clouds':
             if(parseInt(timeImg) > 6 && parseInt(timeImg) < 19){
                 img=Clouds_Sun
             }
             else {
                 img= Clouds_Night
            };
             break;
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
    let ol = document.querySelector('.js-ol')
    ol.remove()
    const nav = document.querySelector('.js-nav')
    console.log('cat')
    ol = document.createElement('ol')
    ol.className = 'js-ol'
    console.log('cato')
    nav.append(ol)
    for(let i = 1 ; i <= 24; i++){
        let time = weatherData.hourly[i].dt;
        let timeFormated = format(time*1000, 'HH:00')
        let timeImg = format(time*1000, 'HH')
        let temperature = parseInt(weatherData.hourly[i].temp);
        let weather = weatherData.hourly[i].weather[0].main;
        ol.append(createHourlyElement(timeFormated, temperature, weather, timeImg))
    }

}

function createHourlyElement(time, temperature, weatherImg, timeImg){
    const li = document.createElement('li')
    li.className = 'hourlyWeatherElement';
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const img = document.createElement('img')
    img.className = "WeatherLike"

    p1.textContent = time;
    p2.textContent = temperature + '°c';
    img.src = getImage(weatherImg, timeImg)

    li.append(p1)
    li.append(p2)
    li.append(img)

    return li
}

export default getDOM_Element