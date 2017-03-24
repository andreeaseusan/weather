// ***** Global variables ***** //
var citibikeData;
var apiKey = '6d0bb159527d981fea06beaff4b35650';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData; 
var temperature = 0; 
var humidity = 0;
var button; 
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;


// ***** Preload function ***** //

// ***** Setup function ***** //
function setup (){
    createCanvas(800,800);
    button = select ('#submit');
    city = select ('#city');
    button.mousePressed(queryAPI);
    img1 = loadImage ("../img/negative20to30.jpg");
    img2 = loadImage ("../img/negative10to20.jpg");
    img3 = loadImage ("../img/negative0to10.jpg");
    img4 = loadImage ("../img/positive0to10.jpg");
    img5 = loadImage ("../img/positive10to20.jpg");
    img6 = loadImage ("../img/positive20to30.jpg");
    img7 = loadImage ("../img/positive30to40.jpg");
}

function queryAPI(){
    var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units;
    loadJSON(query, getWeatherData);
}

function getWeatherData(apiData){
    weatherData = apiData;
    temperature = weatherData.main.temp;
    description = weatherData.weather[0].description;
    console.log(weatherData);
}

  // Drawing function//

function draw(){
    background (255);
    noStroke();
    if (weatherData){ 
    // Temperature //
        text('temperature (C): ' + nfc(temperature, 0), 300, 50);
        fill (0)
        textSize (20)

    if (temperature >= -30 && temperature < -20){
    image(img1,80,80)
    }

    if (temperature >= -20 && temperature < -10){
    image(img2,80,80)
    }

    if (temperature >= -10 && temperature < 0){
    image(img3,80,80)
    }

    if (temperature >= 0 && temperature < 10){
    image(img4,80,80)
    }
    
    if (temperature >= 10 && temperature < 20){
    image(img5,80,80)
    }
   
    if (temperature >= 20 && temperature < 30){
    image(img6,80,80)
    }

    if (temperature >= 30 && temperature < 40){
    image (img7,80,80)
    }

    // Description 
    text(description,300, 30)
    fill (0)
    textSize (20)


}
}

