import getDOM_Element from './DOM_Manipulation'

async function getCityCoordinate(city) {
    console.log(city)
    try{
    const cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=e6ce228c45a907c44d46d3de48159d57`, {mode: 'cors'});
    const cityData = await cityResponse.json();
    console.log(cityData)
    
    let cityName = cityData[0].name
    let lat = cityData[0].lat
    let lon = cityData[0].lon
    
    getCityWeather(lat, lon, cityName)
    }
    catch(err){
    console.log('Tlacuache1')
    }
}

async function getCityWeather(lat, lon, city){
    try{
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alert&units=metric&appid=e6ce228c45a907c44d46d3de48159d57`, {mode: 'cors'});
        const weatherData = await weather.json();
        console.log(weatherData);
        getDOM_Element(weatherData, city,);
        
        }
    catch(err){
    console.log('Tlacuache2')
    }
}

async function getCity_WithCoordinate(lat, lon){
    console.log(lat, lon)
    try{
        const weather = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=e6ce228c45a907c44d46d3de48159d57`, {mode: 'cors'});
        const weatherData = await weather.json();
        console.log(weatherData);
        let city = weatherData[0].name
        getCityWeather(lat, lon, city);
        
        }
    catch(err){
    console.log('Tlacuache3')
    }
}

export {getCityCoordinate, getCity_WithCoordinate}

