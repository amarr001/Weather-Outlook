var cityList = $("#cityList");
var cityInput = $(".cityInput");
var cities = [];
var weatherDisplay = $(".weatherDisplay");
var currentDate = moment().format('dddd, MMMM Do');



cityList.empty();

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

        /*for(i=0; i<cities.length; i++){

            var city = [{
                cityId: $(".cityBtn").attr("data-city-id"),
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
                cityId = "6619279"
                
            }
            if(input === "Darwin"){
                cityId = "7839402"
                
            }
            if(input === "Hobart"){
                cityId = "2163355"
                
            }
            
        }*/

        console.log(cities);
        console.log(cityBtn);

    cityBtn.on("click", function(event){
        event.preventDefault();

        if(input === "Adelaide"){

        var APIkey = "c876a593b2fe39ad3d8e6cb1bc1dd14d";

                 var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
                "id=7839644&appid=" + APIkey;
       
                $.ajax({
                url: queryURL,
                method: "GET"
            })
            // We store all of the retrieved data inside of an object called "response"
            .then(function(response) {

                console.log(queryURL);
                console.log(response);

                var iconCode = response.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                
               $(".cityName").html("<h1>" + response.name + "<img src='" + iconUrl  + "'>" + "</h1>" + "<h4>" + currentDate + "</h4>" );

        
            })
        }

        })
    });