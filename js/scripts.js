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
["family-friendly", "casual", "book"], //coming up with
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
"img/prasad.jpg",
"7:30AM",
"8PM",
"Harlow breaks from the vegan mold (though remains vegetarian) mostly during breakfast, with a menu offering scrambles alongside rice or quinoa; huevos rancheros with housemade tortillas; and lemon poppy quinoa pancakes with a choice of vegan or dairy butter. (Also available for breakfast: granola, classic oatmeal, and maple-roasted veggies served with polenta and eggs.) Lunch expands Prasad's cafe menu of hot and raw soups, salads, and bowls (including the 'Mighty Bowl,' which is offered on a donation basis) with dishes like a vegan mac and cheese; dinner includes three raw dishes, including a raw veggie burger, and barbecue tempeh. In an attempt to make drinking a healthier pursuit, the bar will serve fresh juice-based cocktails, like the 'Dorian's Tonic' (featuring gin, cucumber, apple, basil, and cilantro), as well as a bourbon-heavy spirits menu.");


// Place Objects (Downtown)
var chineseGarden = new Place("Lan Su Chinese Garden",
2,
["entertainment"],
[],
["family-friendly", "nature", "culture"],
["morning", "afternoon"],
"img/chinesegarden.jpg",
"10AM",
"7PM",
"A year-round wonder, the Lan Su Chinese Garden is an authentic Ming Dynasty style garden, built by Suzhou artisans, that takes up an entire block of the city's historic Chinatown district. Since the garden's opening in 2000, its covered walkways, bridges, open colonnades, pavilions and richly planted landscape framing the man-made Zither Lake have created an urban oasis of tranquil beauty and harmony. It's an inspiring, serene setting for meditation, quiet thought and tea served at The Tao of Tea in the Tower of Cosmic Reflections, as well as public tours of the grounds led by expert horticulturalists.");

var groundKontrol = new Place("Ground Kontrol",
1,
["entertainment", "bar"],
["gluten-free"],
["family-friendly", "arcade", "casual"],
["afternoon", "evening", "late-night"],
"img/groundkontrol.png",
"12AM",
"2:30AM",
"Ground Kontrol is the West Coast's premier classic arcade. We preserve and celebrate video gaming's golden age by operating over 60 classic video games and 27 pinball machines, feature a full-service bar after 5PM, host DJs, comedy shows, trivia nights, game tournaments, and Rock Band karaoke, and are available for public and private event rentals.");

var oldTownPizza = new Place("Old Town Pizza",
  1,
  ["food", "bar"],
  [],
  ["family-friendly", "casual"],
  ["afternoon", "evening"],
  "img/oldtownpizza.jpg",
  "11:30AM",
  "11PM",
  "Framed in the heart of the Portland, Oregon, Old Town emulates the spirit of our region with every beer we brew and every pizza we make. Inspired by the untamed attitude and the support of our driven community, you may consider this our love letter to the Pacific Northwest.");

var roselandTheater = new Place("Roseland Theater",
  3,
  ["entertainment"],
  [],
  ["casual", "music"],
  ["evening", "late-night"],
  "img/roselandtheater.jpg",
  "varies",
  "varies",
  "Managed by Double Tee Concerts, The Roseland Theater in Portland is one of the premier showcase concert venues in America.");

var hobos = new Place("Hobo's Restaurant & Lounge",
  2,
  ["food", "bar"],
  [],
  ["lounge", "gay-friendly"],
  ["afternoon", "evening", "late-night"],
  "img/hobos.jpg",
  "4PM",
  "2AM",
  "Hobo's restaurant offers fine dining in a comfortable lounge atmosphere. Located in Portland, Oregon, Hobo's has been a part of the Northwest's dining and lounge experience for over twenty five years.");

var departure = new Place("Departure Restaurent + Lounge",
3,
["bar", "food"],
["gluten-free", "vegan"],
["upscale", "views", "casual"],
["evening", "late-night"],
"img/departure.jpg",
"4PM",
"11PM",
"Floating atop the landmark Meier & Frank Building, Departure's ambitious menu captivates diners with its masterful remix of authentic coastal cuisines. From street food-styled starters to meal-sized classics, rice and noodle specialties to market-fresh sushi, Departure embraces the bounty of the Pacific Northwest to deliver the fiery flavors of the Far east. Whether steamed or stir-fried, smoked or sauteed, each dish leads diners to another stage along Departure's culinary adventure." + '<br>' +
"In a space whose design is as daring as its cuisine, Departure is Portland's sky-high retreat for both quick bites and leisurely dining. Step beyond its iconic facade into a world of cutting-edge interiors that seamlessly blend Portland's pioneering past with its progressive future. With a relaxed, refined atmosphere, Departure is the ultimate location for encounters of every taste and style."
);

// Neighborhood objects
var pearl = new Neighborhood("Pearl");
pearl.places.push(powells, prasad);

var downtown = new Neighborhood("Downtown");

Neighborhood.prototype.filterByPrice = function (inputPrice) {
  var neighborhoods = [pearl, downtown];
  for (i = 0; i < neighborhoods.length; i++) {
   if (inputPrice === neighborhoods[i].price) {
     neighborhoods[i].price;
   }
 }
};

function time(){ //fluctuate the css stylesheet
  var time = new Date();
  var hourNow = time.getHours();

  if (hourNow > 18) {
    $("head").append('<link href="css/night.css" rel="stylesheet" type="text/css">');
  } else {
    $("head").append('<link href="css/coolearth.css" rel="stylesheet" type="text/css">');
  }
}

$(function() {
  time();
  $("#filter-form").submit(function(event) {
    event.preventDefault();
    // debugger;
    var inputPrice = parseInt($("#inputPrice").val());
    var inputLocation = $("input:radio[name=location]:checked").val();
    var inputType = $("#inputType").val();
    var inputHours = $("input:radio[name=hours]:checked").val();

    $("input:checkbox[name=diet]:checked").each(function(){
      var inputDiet = $(this).val();
    });


    var neighborhoods = [pearl, downtown];

    var outputNeighborhood = filterByName(inputLocation, neighborhoods);

    var results = filterByPlaceProperties(inputPrice, outputNeighborhood.places);
    results = filterByPlaceProperties(inputType, results);


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
    });


    $("#filter-form").toggleClass("hide");
  });

  $("#hamburger-nav-icon").click(function(){
    $("#filter-form").toggleClass("hide");
  });

});
