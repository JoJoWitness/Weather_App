import getCityCoordinate from "./weather_Call";



function getDOM_Buttons(){
    const locationDOM = document.querySelector('.js-location');
    locationDOM.addEventListener('click', getCurrentLocation);
    const searchDOM = document.querySelector('.js-search');
    searchDOM.addEventListener('click',getCity)
}

function getCurrentLocation(){
function success(pos) {
    const crd = pos.coords;
    console.log(crd);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function err(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, err)
}

function getCity(){
   const cityInput = document.querySelector('.js-city');
    let city = document.querySelector('.js-city').value;
    city = city.toLowerCase()
    cityInput.value = "";
    console.log(city)

    getCityCoordinate(city)
}

export default getDOM_Buttons