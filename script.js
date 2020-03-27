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
        deleteBtn = $("<button>").attr({"class": "btn btn-info deleteBtn"});
        deleteIcon = $("<i>").attr({"class": "far fa-trash-alt"});
        deleteBtn.append(deleteIcon);
    
        cityList.append(list);
        cityBtn.append(deleteBtn);
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
        deleteBtn = $("<button>").attr({"class": "btn btn-info deleteBtn"});
        deleteIcon = $("<i>").attr({"class": "far fa-trash-alt"});
        deleteBtn.append(deleteIcon);
        cityBtn.append(deleteBtn);
        cityList.append(list);
        list.append(cityBtn);
    }


}

$(".deleteBtn").on("click", function(){

    $(this).parent().remove();
    
    console.log(cities);

    localStorage.setItem("cities", JSON.stringify(cities));
})