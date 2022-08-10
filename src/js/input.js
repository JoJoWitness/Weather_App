import {getCityCoordinate, getCity_WithCoordinate} from "./weather_Call";



function getDOM_Buttons(){
    const locationDOM = document.querySelector('.js-location');
    locationDOM.addEventListener('click', getCurrentLocation);
    const searchDOM = document.querySelector('.js-search');
    searchDOM.addEventListener('click',getCity )
    searchDOM.addEventListener('submit', function(e){
      e.preventDefault()});
    const cityInput = document.querySelector('.js-city');
    cityInput.addEventListener('submit', function(e){
    e.preventDefault()}, false);
}

function getCurrentLocation(){
function success(pos) {
    const crd = pos.coords;
    console.log(crd);
  
    let lat = crd.latitude
    let lon = crd.longitude

    getCity_WithCoordinate(lat, lon)
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

function pressEnter(e){
  if (e.key === 'Enter'){getCity();}
  
}

window.addEventListener('keydown', pressEnter)

export default getDOM_Buttons
export {getCurrentLocation} 