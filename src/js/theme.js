function selectClass(weatherLike, time){
    const root = document.documentElement;
    switch(weatherLike){
        case 'Clear': 
            if(parseInt(time) > 6 && parseInt(time) < 19){
                root.className = 'sunny'
            }
            else {
                root.className = 'night'
            };
            break;
        case 'Clouds':
             if(parseInt(time) > 6 && parseInt(time) < 19){
                 root.className = 'sunny'
             }
             else {
                 root.className = 'night'
                 
            };
             break;
        case 'Snow':
            root.className = 'snow'
            break;
        default:
            root.className = 'rain'
    }
}

export default selectClass