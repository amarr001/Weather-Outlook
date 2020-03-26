
var cityList = $("#cityList");
var input = $(".city");




//Add event on search button click

$("#searchCity").on("click", function(event){
event.preventDefault();

var list = $("<li>")
var cityBtn = $("<button>").attr({"class": "btn btn-secondary cityBtn"})
cityBtn.text(input.val());
cityList.append(list);
list.append(cityBtn);


})