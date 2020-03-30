var cityList = $("#cityList");
var cityInput = $(".cityInput");
var cityDisplay = $(".cityDisplay");
var cities = [];
var weatherDisplay = $(".weatherDisplay");
var currentDate = moment().format('dddd, MMMM Do');




cityList.empty();
cityDisplay.hide();

// When I search for an Australian Capital
$("#searchCity").on("click", function(event){
event.preventDefault();

        var input = cityInput.val();
        cities.push(input);
        if(input === ""){
            return;
        }
        
        cityInput.val("");
    

        var list = $("<li>")
        var cityBtn = $("<button>").attr({"class": "btn btn-secondary cityBtn"})
        cityBtn.text(input);
    
        cityList.append(list);
        list.append(cityBtn);

        
    // When I select a city
    cityBtn.on("click", function(event){
        
        event.preventDefault();
        cityDisplay.show();
        var APIkey = "580c3816a0776bc60fd5cfc966954bd0";

                if(input === "Adelaide"){
                var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
                "id=7839644&units=metric&APPID=" + APIkey; //units=metric converts K to Celsius
                }
                if(input === "Melbourne"){
                var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
                "id=7839805&units=metric&APPID=" + APIkey; 
                }
                if(input === "Perth"){
                var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
                "id=2063523&units=metric&APPID=" + APIkey; 
                }
                if(input === "Brisbane"){
                    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
                    "id=2174003&units=metric&APPID=" + APIkey;
                }
                if(input === "Sydney"){
                    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
                    "id=6619279&units=metric&APPID=" + APIkey;
                }
                if(input === "Darwin"){
                    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
                    "id=7839402&units=metric&APPID=" + APIkey;
                }
                if(input === "Hobart"){
                    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
                    "id=2163355&units=metric&APPID=" + APIkey;
                }


                $.ajax({
                url: queryURL,
                method: "GET"
            })


            // Stores all of the retrieved data inside of an object called "response"
            .then(function(response) {

                console.log(queryURL);
                console.log(response);
            
            //Print current weather conditions

                var windSpeed = response.list[0].wind.speed;
                var iconCode = response.list[0].weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            

               $(".cityName").html("<h1>" + response.city.name  + "<img src='" + iconUrl  + "'>" + "<h4>" + currentDate + "</h4>" + "</h1>");
               $(".Temp").text("Temperature: " + response.list[0].main.temp + " C");
               $(".windSpeed").text("Wind Speed: " + windSpeed + " MPS");
               $(".Humidity").text("Humidity: " + response.list[0].main.humidity +" %");
                
            // Update info for each day of the week

               var iconOne = response.list[8].weather[0].icon;
               var iconUrlOne = "http://openweathermap.org/img/wn/" + iconOne + ".png";
               $(".dayOne").html("<p>" + moment().add('1', 'days').format('dddd, MMMM Do') + "<br>" + "<img src='" + iconUrlOne + "'>" +
               "<br>" + "Humidity: " + response.list[8].main.humidity + "%" + "<br>" + "Temperature: " + response.list[8].main.temp + " C" + "</p>");
               
               var iconTwo = response.list[16].weather[0].icon;
               var iconUrlTwo = "http://openweathermap.org/img/wn/" + iconTwo + ".png";
               $(".dayTwo").html("<p>" + moment().add('2', 'days').format('dddd, MMMM Do') + "<br>" + "<img src='" + iconUrlTwo + "'>" +
               "<br>" + "Humidity: " + response.list[15].main.humidity + "%" + "<br>" + "Temperature: " + response.list[15].main.temp + " C" + "</p>");
                
               var iconThree = response.list[24].weather[0].icon;
               var iconUrlThree = "http://openweathermap.org/img/wn/" + iconThree + ".png";
               $(".dayThree").html("<p>" + moment().add('3', 'days').format('dddd, MMMM Do') + "<br>" + "<img src='" + iconUrlThree + "'>" +
               "<br>" + "Humidity: " + response.list[24].main.humidity + "%" + "<br>" + "Temperature: " + response.list[24].main.temp + " C" + "</p>");

               var iconFour = response.list[32].weather[0].icon;
               var iconUrlFour = "http://openweathermap.org/img/wn/" + iconFour + ".png";
               $(".dayFour").html("<p>" + moment().add('4', 'days').format('dddd, MMMM Do') + "<br>" + "<img src='" + iconUrlFour + "'>" +
               "<br>" + "Humidity: " + response.list[32].main.humidity + "%" + "<br>" + "Temperature: " + response.list[32].main.temp + " C" + "</p>");
           
           
            })
            

        
    });

});
// Auto-capitalize the first character of the input 
$(document).ready(function() {
    $('.cityInput').on('keydown', function(event) {
        if (this.selectionStart == 0 && event.keyCode >= 65 && event.keyCode <= 90 && !(event.shiftKey) && !(event.ctrlKey) && !(event.metaKey) && !(event.altKey)) {
           var $t = $(this);
           event.preventDefault();
           var char = String.fromCharCode(event.keyCode);
           $t.val(char + $t.val().slice(this.selectionEnd));
           this.setSelectionRange(1,1);
        }
    });
});

/*for(i=0; i<cities.length; i++){

            var forecast = [{
                cityName: $(".cityBtn").attr("data-city-name"), // GET THE NAME OF THE CITY
                cityTemp: $(".cityBtn").attr("data-city-temp"),// GET THE TEMP OF THE CITY
                cityUVIndex: $(".cityBtn").attr("data-city-cityUVIndex") // GET THE cityUVIndex OF THE CITY
            }];
            
            cities[i] = city

            if(input === "Adelaide"){
                city.cityId = "7839644"
            
            }

            if(input === "Melbourne"){
                city.cityId = "7839805"
                
            }
            if(input === "Brisbane"){
                city.cityId = "2174003"
                
            }
            if(input === "Sydney"){
                city.cityId = "6619279"
                
            }
            if(input === "Darwin"){
                city.cityId = "7839402"
                
            }
            if(input === "Hobart"){
                city.cityId = "2163355"
                
            }
            
        }
*/