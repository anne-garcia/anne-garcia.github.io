//HERO SLIDER
//This variable is called images, and have these four images in a loop
//This is an array of four strings
var images = [
    "images/sunny.jpg",
    "images/cloudy.jpg",
    "images/rain.jpg",
    "images/snow.jpg",
]

//Loop, where i=0, so the images will start from 0 (one)
//This is an integer variable "var i=0"
var i=0;
//This is a funciton
function slide() {
    //this will get all images from the "var image =[]"
    document.getElementById("sliderFirstImage").src = images[i];
    //this is the image length, in this case there are four images
    if(i<(images.length-1)) {
        //if i reaches the fourth image, it will go back to 0 (the first image)
        i++;
    }
    else {
        i=0;
    }
}
//this is the slider timer, 3000=3seconds to call the next image
setInterval(slide,5000);


//WEATHER APPLICATION
$(document).ready(function(){
            
    //Shorthand to call JSON
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&appid=ce4b5a2d7a6f732828b60b5b10a83652", function(data){
        console.log( data );

        //City
        $('#city').html(data.name);

        //Latitude and Longitude
        $('#latitude').html(data.coord.lat);
        $('#longitude').html(data.coord.lon);

        //Weather Icon
        $.each( data.weather, function( key, weatherCondition) {
            console.log(weatherCondition.icon);

            $('<img/>', {
                src: `https://openweathermap.org/img/wn/${weatherCondition.icon}@4x.png`,
            }).appendTo('#weatherIcons');
        });

        //Temperature
        $('#feelsLike').html(Math.round(data.main.feels_like) + '&#8451;');
        $('#temp').html(Math.round(data.main.temp) + '&#8451;');
        $('#tempHigh').html(Math.round(data.main.temp_max) + '&#8451;');
        $('#tempLow').html(Math.round(data.main.temp_min) + '&#8451;');


        //Weather Description
        var desc = data.weather[0].description;

        $('#description').html(desc);

        //Wind
        $('#wind').html(data.wind.speed);
    });
});
