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

// ***** Preload function ***** //

// ***** Setup function ***** //
function setup (){
    createCanvas(800,8000);
    button = select ('#submit');
    city = select ('#city');
    button.mousePressed(queryAPI);
}

function queryAPI(){
    var query = baseURL + city.value() + '&apiKey=' + apiKey + '&units=' + units;
    loadJSON(query, getWeatherData);
}

function getWeatherData(apiData){
    weatherData = apiData;
    temperature = weatherData.main.temp;
    humidity = weatherData.main.humidity;
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
    
    if (temperature > 0 && temperature < 10){
    ellipse (200,200, temperature * 10, temperature * 10);
    fill(0);
    }
    
    if (temperature > 10 && temperature < 20){
    ellipse (200,200, temperature * 10, temperature * 10);
    fill(100);
    }
   
    // Description 
    text(description,300, 30)

}
}

