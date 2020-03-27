
var cityList = $("#cityList");
var cityInput = $(".cityInput");
var input = cityInput.val();
var cityBtn; 
var cities = [];

cityList.empty();
init();

$("#searchCity").on("click", function(event){
event.preventDefault();

        var input = cityInput.val();
        cities.push(input);
        cityInput.val("");
    

        var list = $("<li>")
        var cityBtn = $("<button>").attr({"class": "btn btn-secondary cityBtn"})
        cityBtn.text(input);
        cityList.append(list);
        list.append(cityBtn);
    
   
    localStorage.setItem("cities", JSON.stringify(cities));

    console.log(cities);

});

function init(){

    var storedCity = JSON.parse(localStorage.getItem("cities"));
    if (cities !== null){
        cities = storedCity
    }

renderCities();

}

function renderCities(){

    for(i=0; i<cities.length; i++){

        var list = $("<li>")
        var cityBtn = $("<button>").attr({"class": "btn btn-secondary cityBtn"})
        cityBtn.text(cities[i]);
        cityList.append(list);
        list.append(cityBtn);

    }


}

