import '../styles/UpperPart.scss';
import '../styles/Images.scss'
import '../styles/Input.scss'
import '../styles/NavHourly.scss'
import getDOM_Buttons from './input';
import {getCurrentLocation} from './input';
import {getCityCoordinate} from './weather_Call'

function initialize(){
    const root = document.documentElement;
    root.className = 'sunny'
    getDOM_Buttons();
    getCityCoordinate('Paris');
    setTimeout(getCurrentLocation, 1000)
    


}

initialize()