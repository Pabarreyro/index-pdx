// Business Logic

//Constructors
function Place(name, price, type, diet, atmosphere, hours, img, openTime, closeTime, desc = "") {
  this.name = name;
  this.price = price;
  this.type = type;
  this.diet = diet;
  this.atmosphere = atmosphere;
  this.hours = hours;
  this.img = img;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.desc = desc;
}

function Neighborhood(name='', places=[]) {
  this.name = name;
  this.places = places;
}

// filter by neighborhoods name
function filterByName(userInput, neighborhoods) {
  for(var i = 0; i < neighborhoods.length; i ++){
    if(userInput === neighborhoods[i].name){
      return neighborhoods[i];
    }
  }
}

function displayAtmosphere(array) {
  for(var i = 0; i < array.length; i ++){
    '<li>' + array[i] + '</li>';
  }
}

// Neighborhood.prototype.filterByName = function (userInput) {
//   var neighborhoods = [pearl, downtown];
//   for(var i = 0; i < neighborhoods.length; i ++){
//     if(userInput === neighborhoods[i].name){
//       return neighborhoods[i];
//     }
//   }
//   return false;
// };

// function filter by places properties
// input: userInput, could be any properties of a place
// places: an array of places
// return: an array of matched places
function filterByPlaceProperties(input, places) {
  console.log(input);
  var outplaces =[];
  places.forEach(function(place){
    for(let property in place){
      if(place[property] === input){
        outplaces.push(place);
      } else if(Array.isArray(place[property]) && place[property].includes(input)){
        outplaces.push(place);
      }
    }
  });
  return outplaces;
};


// Place Objects (Pearl)
var powells = new Place("Powell's City of Books",
1,
["shopping"],
[],
["family-friendly", "casual", "book"],
["morning", "afternoon", "evening"],
"img/powells.jpg",
"9AM",
"11PM",
"Powell's Books is an independent bookseller serving Portland, Oregon, since 1971. We've grown to employ over 530 people across five Portland-area stores and Powells.com, and our book inventory exceeds two million volumes. In spite of our substantial size and reach, we remain grounded by our company's core values, which have guided us through the ups and downs of the bookselling industry. Each and every employee's love of books drives us forward."
);

var prasad = new Place("Prasad",
2,
["food", "cafe"],
["vegan", "organic", "raw", "gluten-free"],
["healthy", "casual"],
["early-morning", "afternoon"],
"img/prasad.jpg");

// Place Objects (Downtown)
var chineseGarden = new Place("Lan Su Chinese Garden",
2,
["garden", "parks"],
[],
["family-friendly", "nature", "culture"],
["morning", "afternoon"],
"img/chinesegarden.jpg");

var groundKontrol = new Place("Ground Kontrol",
2,
["entertainment", "bar"],
["gluten-free"],
["family-friendly", "arcade", "casual"],
["afternoon", "evening", "late-night"],
"img/groundkontrol.png");

var departure = new Place("Departure Restaurent + Lounge",
3,
["bar", "food"],
["gluten-free", "vegan"],
["upscale", "views"],
["evening", "late-night"],
"img/departure.jpg");

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


// var places = [chineseGarden, groundKontrol, departure];
// var out = filterByPlaceProperties('$', places);
// out.forEach(place => console.log(place));


//User logic
$(function() {
  $("#filter-form").submit(function(event) {
    event.preventDefault();
    // debugger;
    var inputPrice = parseInt($("#inputPrice").val());
    var inputLocation = $("input:radio[name=location]:checked").val();
    var inputType = $("#inputType").val();
    var inputHours = $("input:radio[name=hours]:checked").val();

    $("input:checkbox[name=diet]:checked").each(function(){
      var inputDiet = $(this).val();
      // console.log(inputDiet);
      // $("").append(inputDiet + "<br>");
    });

    var neighborhoods = [pearl, downtown];

    var outputNeighborhood = filterByName(inputLocation, neighborhoods);
    // console.log(outputNeighborhood);
    var results = filterByPlaceProperties(inputPrice, outputNeighborhood.places);
    // results = filterByPlaceProperties(inputType, results);
    console.log(results);

    results.forEach(function(result){
      $("#user-output").append( '<div class="well place">' +
                                  '<img class="placeImage" src="' + result.img + '" alt="an image of ' + result.name +  '" id="placeImg">' +
                                  '<h2><span class="h2-style">' + result.name + '</span>  <i data-feather="star" class="floatImg"></i></h2>' +
                                  '<i data-feather="dollar-sign" id="dollar-sign"></i>'.repeat(result.price) +
                                  '<p class="hrs-float"><strong>Hours: </strong></p>' +
                                  '<ul id="hours-list">' +
                                    '<li class="weeknight-hours">' + result.openTime + '<span id="open-time"></span> - <span id="close-time">' + result.closeTime + '</span></li>' +
                                  '</ul>' +
                                  '<p>' + result.desc + '</p>' +
                                  '<ul id="features-list">' +
                                    result.atmosphere.join(", ") +
                                  '</ul>' +
                                  '<script>' +
                                    'feather.replace()' +
                                  '</script>' +
                                '<hr>' +
                                '</div>');

        // '<div class="well place">' +
        //                           '<img class="placeImage" src="img/powells.jpeg" alt="an image of a bookstore">' +
        //                           '<h2><span class="h2-style">' + result.name + '</span>  <i data-feather="star" class="floatImg"></i><i data-feather="star" class="floatImg"></i><i data-feather="star" class="floatImg"></i></h2>' +
        //                           '<hr>' +
        //                         '</div>');
    });


    $("#filter-form").toggleClass("hide");
  });

  $("#hamburger-nav-icon").click(function(){
    $("#filter-form").toggleClass("hide");
  });

});
