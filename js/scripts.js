// Business Logic

//Constructors
function Place(name, price, type, diet, atmosphere, hours) {
  this.name = name;
  this.price = price;
  this.type = type;
  this.diet = diet;
  this.atmosphere = atmosphere;
  this.hours = hours;
}

function Neighborhood(name='', places=[]) {
  this.name = name;
  this.places = places;
}

// filter by neighborhoods name
Neighborhood.prototype.filterByName = function (userInput) {
  var neighborhoods = [pearl, downtown];
  for(var i = 0; i < neighborhoods.length; i ++){
    if(userInput === neighborhoods[i].name){
      return neighborhoods[i];
    }
  }
  return false;
};

// function filter by places properties
// input: userInput, could be any properties of a place
// places: an array of places
// return: an array of matched places
function filterByPlaceProperties(input, places) {
  var outplaces =[];
  places.forEach(function(place){
    for(let property in place){
      if (place[property].includes(input) || place[property] === input){
        outplaces.push(place);
      }
    }
  });
  return outplaces;
};

// Place Objects (Pearl)
var powells = new Place("Powell's City of Books",
"$$",
["shopping"],
[],
["family-friendly", "casual", "book"],
["morning", "afternoon", "evening"]);

var prasad = new Place("Prasad",
"$$",
["food", "cafe"],
["vegan", "organic", "raw", "gluten-free"],
["healthy", "casual"],
["early-morning", "afternoon"]);

// Place Objects (Downtown)
var chineseGarden = new Place("Lan Su Chinese Garden",
"$$",
["garden", "parks"],
[],
["family-friendly", "nature", "culture"],
["morning", "afternoon"]);

var groundKontrol = new Place("Ground Kontrol",
"$",
["entertainment", "bar"],
["gluten-free"],
["family-friendly", "arcade", "casual"],
["afternoon", "evening", "late-night"]);

var departure = new Place("Departure Restaurent + Lounge",
"$$",
["bar", "food"],
["gluten-free", "vegan"],
["upscale", "views"],
["evening", "late-night"]);

// Neighborhood objects
var pearl = new Neighborhood("Pearl");
pearl.places.push(powells, prasad);

var downtown = new Neighborhood("Downtown");
downtown.places.push(chineseGarden, groundKontrol, departure);

Neighborhood.prototype.filterByPrice = function (inputPrice) {
  var neighborhoods = [pearl, downtown];
  for (i = 0; i < neighborhoods.length; i++) {
   if (inputPrice === neighborhoods[i].price) {
     neighborhoods[i].price;
   }
 }
};

var places = [powells, prasad, groundKontrol, chineseGarden];
var out = filterByPlaceProperties('morning', places);
out.forEach(place => console.log(place.name));

//User logic
$(function() {
  $("#hamburger-nav-icon").click(function(){
    $("#filter-form").toggleClass("hide");
  });

  $("#filter-form").submit(function(event) {
    event.preventDefault();

    $("#filter-form").toggleClass("hide");
  })
});
