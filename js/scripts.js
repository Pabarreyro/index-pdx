// Business Logic

// Place constructor
function Place(name, price, neighborhood, type, diet, atmosphere, hours) {
  this.name = name;
  this.price = price;
  this.neighborhood = neighborhood;
  this.type = type;
  this.diet = diet;
  this.atmosphere = atmosphere;
  this.hours = hours;
}

// Place Objects (Pearl)
var powells = new Place("Powell's City of Books", "$$", "Pearl", ["shopping"], [], ["family-friendly", "casual", "book"], ["morning", "afternoon", "evening"]);
var prasad = new Place("Prasad", "$$", "Pearl", ["food", "cafe"], ["vegan", "organic","raw", "gluten-free"], ["healthy", "casual"], ["early-morning", "afternoon"]);

var chineseGarden = new Place("Lan Su Chinese Garden", "$$", "Downtown", ["garden", "parks"], ["tea"], ["family-friendly", "nature", "culture"], ["morning", "afternoon"]);
var groundKontrol = new Place("Ground Kontrol", "$", "Downtown", ["entertainment", "bar"], ["gluten-free"], ["family-friendly", "arcade", "casual"], ["afternoon", "evening", "late-night"]);
var departure = new Place("Departure Restaurent + Lounge", "$$", "Downtown", ["bar", "food"], ["gluten-free", "vegan"], ["upscale", "views"], ["evening", "late-night"]);
