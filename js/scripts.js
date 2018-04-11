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
["garden", "parks"],
[],
["family-friendly", "nature", "culture"],
["morning", "afternoon"],
"img/chinesegarden.jpg",
"10AM",
"7PM",
"A year-round wonder, the Lan Su Chinese Garden is an authentic Ming Dynasty style garden, built by Suzhou artisans, that takes up an entire block of the city’s historic Chinatown district. Since the garden’s opening in 2000, its covered walkways, bridges, open colonnades, pavilions and richly planted landscape framing the man-made Zither Lake have created an urban oasis of tranquil beauty and harmony. It’s an inspiring, serene setting for meditation, quiet thought and tea served at The Tao of Tea in the Tower of Cosmic Reflections, as well as public tours of the grounds led by expert horticulturalists.");

var groundKontrol = new Place("Ground Kontrol",
2,
["entertainment", "bar"],
["gluten-free"],
["family-friendly", "arcade", "casual"],
["afternoon", "evening", "late-night"],
"img/groundkontrol.png",
"12AM",
"2:30AM",
"Ground Kontrol is the West Coast’s premier classic arcade. We preserve and celebrate video gaming’s “golden age” by operating over 60 classic video games and 27 pinball machines, feature a full-service bar after 5PM, host DJs, comedy shows, trivia nights, game tournaments, and Rock Band karaoke, and are available for public and private event rentals.");

var departure = new Place("Departure Restaurent + Lounge",
3,
["bar", "food"],
["gluten-free", "vegan"],
["upscale", "views", "casual"],
["evening", "late-night"],
"img/departure.jpg",
"4PM",
"11PM",
"Floating atop the landmark Meier & Frank Building, Departure’s ambitious menu captivates diners with its masterful remix of authentic coastal cuisines. From street food-styled starters to meal-sized classics, rice and noodle specialties to market-fresh sushi, Departure embraces the bounty of the Pacific Northwest to deliver the fiery flavors of the Far east. Whether steamed or stir-fried, smoked or sautéed, each dish leads diners to another stage along Departure’s culinary adventure." + '<br>' +
"In a space whose design is as daring as its cuisine, Departure is Portland’s sky-high retreat for both quick bites and leisurely dining. Step beyond its iconic façade into a world of cutting-edge interiors that seamlessly blend Portland’s pioneering past with its progressive future. With a relaxed, refined atmosphere, Departure is the ultimate location for encounters of every taste and style."
);

var livingRoomTheaters = new Place("Living Room Theaters",
2,
["food", "entertainment"],
["gluten-free"],
["family-friendly", "casual", "theater", "date night", "indie films", "food & wine"],
["afternoon", "evening", "late-night"],
"img/living-room-theater.png",
"12PM",
"10PM",
"Living Room® Theaters is a visionary new concept created by longtime filmmakers. We set out to reinvent the way films are viewed and distributed. And to change everything we didn't like about conventional and art house movie theaters - from the film selection to the lobby ambiance, food, seating and service."
+ "</br>" +
"Welcome to the new evolution of cinema - Living Room® Theaters -- the sophisticated yet superbly comfortable environment that combines a European style café and lounge with a relaxing place to see wonderful movies. Cinema has come to its senses.");

var clubPivata = new Place("Club Privata",
3,
["food", "entertainment", "bar"],
["gluten-free", "vegan"],
["upscale", "views", "dancing", "club", "exotic", "private"],
["evening", "late-night"],
"img/privata.jpg",   //change img
"8PM",
"2AM",
"Welcome to Humptown! Willamette Week's new sex advice column written by Portland sex educator and intimacy coach, Stella Harris. Ever had a question about sex and relationships but didn't know who to ask? Maybe you've wondered how to ask your partner for butt stuff, or an open relationship, or how to finally admit that actually, you haven't been having orgasms. Maybe you've got a fetish you've never told anyone about, but you're dying to explore. Diapers? Watersports? Latex? This is the place for you. Everything from kink & BDSM to polyamory, group sex, threesomes, swinging, & straight up vanilla lovin'—Stella has the answers. Not only that, but Humptown will give you specific local resources whenever possible to help facilitate the sex life of your dreams.");

var pioneerPlace = new Place("Pioneer Place",
3,
["shopping", "food", "cafe", "entertainment"],
["gluten-free"],
["family-friendly", "casual", "food", "shopping", "clothing", "high end"],
["morning", "afternoon", "evening"],
"img/pioneer.png",
"10AM",
"8PM",
"Where downtown Portland comes to life. Downtown Portland is buzzing with activity. And it's not just the coffee. There is an energy here that charges every moment with fun and excitement. In the heart of downtown, you'll find Pioneer Place – four city blocks filled with shopping, dining and entertainment. Add tax-free shopping, and you're certain to have the time of your life.");

var unionWay = new Place("Union Way",
3,
["shopping"],
[],
["family-friendly", "local designers", "retail", "clothing", "shop", "food"],
["morning", "afternoon", "evening"],
"img/union.png",
"11AM",
"7PM",
"Union Way, a modern arcade connecting downtown Portland’s West End with the Pearl District, opened for business in summer 2013. Converted from two former nightclubs, the corridor packs various businesses into a covered galleria that links Powell’s City of Books to the Ace Hotel."
+ "</br>" +
"With nine shops ranging in size from 187 to 1,500 square feet, the bright alleyway, lit with skylights, is the perfect bridge to connect the city’s newest shopping neighborhood, the West End, to the Pearl District, with its many boutiques and galleries. Danner, the iconic Oregon boot brand, has opened its first ever stand-alone retail shop in the alley, alongside high-end outfitter Will Leather Goods, another established Oregon company.");

var radishUnderground = new Place("Radish Underground",
3,
["shopping"],
[],
["family-friendly", "retail", "casual", "shop", "clothing", "local designers"],
["morning", "afternoon", "evening"],
"img/radish.png",
"11AM",
"6PM",
"Union Way, a modern arcade connecting downtown Portland’s West End with the Pearl District, opened for business in summer 2013. Converted from two former nightclubs, the corridor packs various businesses into a covered galleria that links Powell’s City of Books to the Ace Hotel.");

// Neighborhood objects
var pearl = new Neighborhood("Pearl");
pearl.places.push(powells, prasad);

var downtown = new Neighborhood("Downtown");
downtown.places.push(chineseGarden, groundKontrol, departure, livingRoomTheaters, clubPivata, pioneerPlace, unionWay, radishUnderground);

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

function time(){ //function to fluctuate the css stylesheet
  var time = new Date();
  var hourNow = time.getHours();

  if (hourNow > 18) {
    $("head").append('<link href="css/night.css" rel="stylesheet" type="text/css">');
  } else {
    $("head").append('<link href="css/coolearth.css" rel="stylesheet" type="text/css">');
  }
}
//User logic
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
