// Business Logic
let pearlPlacesArray = [
  {
    name:"Powells",
    price:1,
    type:["shopping"],
    diet:null,
    atmosphere:["family-friendly", "casual", "book"],
    hours:["morning", "afternoon", "evening", "late night"],
    img:"img\/powells.jpeg",
    openTime:"9AM",
    closeTime:"11PM",
    desc:"Powell's Books is an independent bookseller serving Portland, Oregon, since 1971. We've grown to employ over 530 people across five Portland-area stores and Powells.com, and our book inventory exceeds two million volumes. In spite of our substantial size and reach, we remain grounded by our company's core values, which have guided us through the ups and downs of the bookselling industry. Each and every employee's love of books drives us forward."
  },
  {name:"Everyday Music",price:1,type:["shopping"],diet:null,atmosphere:["music & DVDs"],hours:["morning", "afternoon", "evening"],img:"img\/everyday.jpg",openTime:"10AM",closeTime:"10PM",desc:"Everyday Music stores specialize in used CDs, DVDs, and records, but also carry a wide variety of new discs and vinyl. Each location stocks over 100,000 CDs and records."},
  {name:"Daedalus Books",price:1,type:["shopping"],diet:null,atmosphere:["used books"],hours:["morning", "afternoon"],img:"img\/daedelus.jpg",openTime:"10AM",closeTime:"6PM",desc:"This smaller, unassuming bookstore specializes in philosophy, art, music & literature tomes."},
  {name:"Blick Art Materials",price:1,type:["shopping"],diet:null,atmosphere:["art supplies", "hobby shop"],hours:["early-morning", "morning", "afternoon", "evening"],img:"img\/blick.jpg",openTime:"9AM",closeTime:"8PM",desc:"Chain stocking an extensive selection of art supplies, including sketchbooks, paints & canvases."},
  {name:"Porch Light",price:1,type:["shopping"],diet:null,atmosphere:["antiques", "home & garden", "jewelry"],hours:["morning","afternoon"],img:"img\/porch.jpg",openTime:"11AM",closeTime:"6PM",desc:"Eclectic shop with old & new furniture, jewelry, curios & other decor items plus apothecary goods."},
  {name:"Lucy Activewear",price:2,type:["shopping"],diet:null,atmosphere:["women's clothing", "sportswear"],hours:["morning", "afternoon", "evening"],img:"img\/lucy.jpg",openTime:"10AM",closeTime:"8PM",desc:"Fashion-forward yoga, running & workout wear & accessories for women."},
  {name:"Sheepskin of Oregon",price:2,type:["shopping"],diet:null,atmosphere:["home decor", "shoes"],hours:["morning", "afternoon"],img:"img\/sheep.jpg",openTime:"10AM",closeTime:"6PM",desc:"Longtime leather shop specializing in sheepskin slippers, boots & rugs, plus apparel & car covers."},
  {name:"Made Here PDX",price:2,type:["shopping"],diet:null,atmosphere:["home decor", "accessories", "gifts"],hours:["morning", "afternoon"],img:"img\/made.jpg",openTime:"11AM",closeTime:"6PM",desc:"Design focused, fashionable products entirely designed and manufactured in Portland, OR."},
  {name:"Lululemon Athletica",price:2,type:["shopping"],diet:null,atmosphere:["women's clothing", "sportswear", "yoga"],hours:["morning", "afternoon"],img:"img\/lulu.jpg",openTime:"10AM",closeTime:"7PM",desc:"High-end yoga-focused chain featuring stylish athletic wear & accessories (most offer free classes)."},
  {name:"Anthropologie",price:2,type:["shopping"],diet:null,atmosphere:["women's clothing", "home decor", "accessories"],hours:["morning", "afternoon", "evening"],img:"img\/anthro.jpg",openTime:"10AM",closeTime:"8PM",desc:"Chain selling boho-chic womenswear, shoes, accessories & home decor (some feature wedding attire)."},
  {name:"Alchemy Jeweler",price:3,type:["shopping"],diet:null,atmosphere:["jewelry"],hours:["morning", "afternoon"],img:"img\/alchemy.jpg",openTime:"11AM",closeTime:"6PM",desc:"Upscale studio & gallery featuring fine artisanal jewelry & custom handcrafted designs."},
  {name:"Hanna Andersson",price:3,type:["shopping"],diet:null,atmosphere:["childrens' clothing", "women's clothing", "accessories"],hours:["morning", "afternoon"],img:"img\/hanna.jpg",openTime:"10AM",closeTime:"6PM",desc:"high quality organic clothes for girls, boys, babies & women"},
  {name:"Hive Modern Design",price:3,type:["shopping"],diet:null,atmosphere:["furniture", "home decor"],hours:["morning", "afternoon"],img:"img\/hive.jpg",openTime:"10AM",closeTime:"6PM",desc:"Luxury showroom offering a selection of stylish designer home furnishings, lighting & accessories."},
  {name:"Snow Peak",price:3,type:["shopping"],diet:null,atmosphere:["outdoor gear"],hours:["morning", "afternoon"],img:"img\/snow.jpg",openTime:"10AM",closeTime:"6PM",desc:"Sustainable retailer focusing on innovative & high-quality products for camping & outdoor living."},
  {name:"Icebreaker",price:3,type:["shopping"],diet:null,atmosphere:["sportswear"],hours:["morning", "afternoon"],img:"img\/ice.jpg",openTime:"10AM",closeTime:"7AM",desc:"Merino wool outdoor and sport clothing designer and manufacturer, originally headquartered in Auckland, New Zealand."},
  {name:"Los Gorditos",price:1,type:["food"],diet:["vegan"],atmosphere:["Mexican"],hours:["morning", "afternoon", "evening"],img:"img\/gorditos.jpg",openTime:"10AM",closeTime:"9PM",desc:"Local Mexican chain serving traditional & vegan tacos, burritos & plates in a casual setting."},
  {name:"Ovation Coffee & Tea",price:1,type:["food", "cafe"],diet:["gluten-free"],atmosphere:["French", "bakery"],hours:["early-morning", "morning", "afternoon"],img:"img\/ovation.jpg",openTime:"6AM",closeTime:"6PM",desc:"Modern, glass-walled coffee shop serving Moroccan coffee & teas, plus pastries & snack food."},
  {name:"Nuvrei",price:1,type:["food", "cafe"],diet:null,atmosphere:["bakery"],hours:["early-morning", "morning", "afternoon"],img:"img\/nuvrei.jpg",openTime:"7AM",closeTime:"5PM",desc:"Petite bakery open for breakfast & lunch, specializing in coffee, sandwiches & French pastries."},
  {name:"Laughing Planet",price:1,type:["food"],diet:["vegan"],atmosphere:["New American", "juice & smoothie bar"],hours:["morning", "afternoon", "evening"],img:"img\/planet.jpg",openTime:"11AM",closeTime:"9PM",desc:"Health-minded, counter-serve chain featuring creative, globally influenced bowls & burritos."},
  {name:"Little Big Burger",price:1,type:["food"],diet:null,atmosphere:["fast food", "burgers"],hours:["morning", "afternoon", "evening", "late night"],img:"img\/littlebig.jpg",openTime:"11AM",closeTime:"10PM",desc:"Small menu including burgers & truffle fries at no-frills, sustainably minded local chain outpost."},
  {name:"Whole Bowl",price:1,type:["food"],diet:null,atmosphere:["food cart", "vegan", "vegetarian", "gluten-free"],hours:["afternoon"],img:"img\/bowl.jpg",openTime:"11AM",closeTime:"2:30PM",desc:"Big bowls of rice, beans & toppings, including lemon-garlic sauce, dished up at a food-cart outpost."},
  {name:"TILT",price:2,type:["food", "bar"],diet:["raw"],atmosphere:["burgers"],hours:["early-morning", "morning", "afternoon", "evening", "late-night"],img:"img\/tilt.jpg",openTime:"7AM",closeTime:"11PM",desc:"This stylish American eatery offers unfussy breakfast fare, cocktails & burgers in industrial-themed digs."},
  {name:"Khao San Pearl",price:2,type:["food"],diet:["gluten-free"],atmosphere:["Thai food", "tapas\/small plates"],hours:["morning", "afternoon", "evening", "late night"],img:"img\/khao.jpg",openTime:"11AM",closeTime:"10PM",desc:"Casual restaurant serving Thai street food & desserts in a playful, industrial-chic space."},
  {name:"Paragon",price:2,type:["food", "bar"],diet:null,atmosphere:["American food"],hours:["afternoon", "evening", "late-night"],img:"img\/paragon.jpg",openTime:"11:30AM",closeTime:"10PM",desc:"Early & late-night happy hour is a draw at this contemporary eatery & bar serving American fare."},
  {name:"Prasad",price:2,type:["food", "cafe"],diet:["organic", "vegan", "raw", "gluten-free"],atmosphere:["healthy food", "casual"],hours:["early-morning", "morning", "afternoon"],img:"img\/prasad.jpg",openTime:"7:30AM",closeTime:"8PM",desc:"Ha low breaks from the vegan mold (though remains vegetarian) mostly during breakfast, with a menu offering scrambles alongside rice or quinoa; huevos rancheros with housemade tortillas; and lemon poppy quinoa pancakes with a choice of vegan or dairy butter."},
  {name:"Girogio's Restaurant",price:3,type:["food"],diet:null,atmosphere:["Italian food"],hours:["evening"],img:"img\/giorgios.jpg",openTime:"5PM",closeTime:"9:00 PM",desc:"Intimate spot with quaint dining room serving traditional Italian dishes, including handmade pastas."},
  {name:"Can Font Portland",price:3,type:["food"],diet:["raw"],atmosphere:["Spanish food", "mediterranean food", "tapas"],hours:["evening", "late-night"],img:"img\/font.jpg",openTime:"5PM",closeTime:"10:00 PM",desc:"Refined Barcelona-inspired fare is served in an airy, contemporary space with a full bar."},
  {name:"Bluehour",price:3,type:["food", "bar"],diet:null,atmosphere:["French food", "Italian food", "lounge"],hours:["afternoon", "evening", "late-night"],img:"img\/bluehour.jpg",openTime:"4PM",closeTime:"11:00 PM",desc:"Upscale eatery with 16-ft.-long drapes & an outdoor patio serving Mediterranean-New American dishes."},
  {name:"Cider Bite",price:1,type:["bar", "food"],diet:["gluten-free"],atmosphere:["cidery"],hours:["afternoon", "evening"],img:"img\/cider.jpg",openTime:"4PM",closeTime:"9:00 PM",desc:"Buzzy spot with 32 hard ciders on tap & multiple glass sizes, plus shareable plates & snacks."},
  {name:"Low Brow Lounge",price:1,type:["bar"],diet:null,atmosphere:["dive bar", "lounge", "pub"],hours:["afternoon", "evening", "late-night"],img:"img\/lowbrow.jpg",openTime:"3PM",closeTime:"2:30AM",desc:"Late-night bar with dark UV lighting & saloon-style decor offers fried foods & cocktails."},
  {name:"Cha Cha Cha Taqueria",price:1,type:["bar", "food"],diet:null,atmosphere:["Mexican food"],hours:["afternoon", "evening"],img:"img\/cha.jpg",openTime:"11AM",closeTime:"9PM",desc:"Mexican restaurant using the best locally harvested, sustainable ingredients available."},
  {name:"Pizza Schmizza Pub & Grub",price:1,type:["bar", "food"],diet:null,atmosphere:["pizza", "sports bar"],hours:["afternoon", "evening", "late-night"],img:"img\/schmizza.jpg",openTime:"11AM",closeTime:"12AM",desc:"Thin-crust pizza by the slice with 23 locations throughout Oregon."},
  {name:"Blue Pearl Taproom",price:1,type:["bar"],diet:null,atmosphere:["taproom"],hours:["afternoon", "evening", "late-night"],img:"img\/bluepearl.jpg",openTime:"3PM",closeTime:"10PM",desc:"At the crossroads where storied traditions meet bold new ideas in brewing, a locally owned, Portland-based brewing company."},
  {name:"Deschutes Brewery Portland Public House",price:2,type:["bar"],diet:null,atmosphere:["brewpub", "tapas\/small plates"],hours:["afternoon", "evening"],img:"img\/deschutes.jpg",openTime:"11AM",closeTime:"10PM",desc:"Beers brewed on-site & gourmet pub grub in a converted auto-body shop with a fireplace & wood beams."},
  {name:"Irving Street Kitchen",price:2,type:["food", "bar"],diet:null,atmosphere:["New American food", "wine bar"],hours:["afternoon", "evening"],img:"img\/irving.jpg",openTime:"4:30PM",closeTime:"10PM",desc:"Warm, urban-rustic restaurant serving inventive Southern-inspired comfort fare & creative cocktails."},
  {name:"Teardrop Cocktail Lounge",price:2,type:["bar"],diet:["gluten-free"],atmosphere:["lounge", "cocktail bar"],hours:["afternoon", "evening", "late-night"],img:"img\/teardrop.jpg",openTime:"4PM",closeTime:"12:30AM",desc:"Classic & inventive cocktails with top-shelf spirits by talented mixologists in a chic, buzzy space."},
  {name:"River Pig Saloon",price:2,type:["bar"],diet:null,atmosphere:["sports bar", "cocktail bar", "pub food"],hours:["afternoon", "evening", "late-night"],img:"img\/riverpig.jpg",openTime:"3PM",closeTime:"2AM",desc:"Lively neighborhood sports bar with an old-timey atmosphere preparing creative & classic pub grub."},
  {name:"The Big Legrowlski",price:2,type:["bar"],diet:null,atmosphere:["taproom"],hours:["afternoon", "evening", "late-night"],img:"img\/legrowlski.jpg",openTime:"2PM",closeTime:"2AM",desc:"Urban-chic watering hole for craft beer offered on tap, in bottles & in take-home growlers."},
  {name:"Andina",price:3,type:["bar", "food"],diet:null,atmosphere:["Peruvian food", "tapas", "wine bar"],hours:["afternoon", "evening", "late-night"],img:"img\/andina.jpg",openTime:"11:30AM",closeTime:"11PM",desc:"Upscale Peruvian tapas & entrees, plus regional cocktails, presented in a warm, bustling room."},
  {name:"The Hairy Lobster",price:3,type:["bar", "food", "entertainment"],diet:["vegan"],atmosphere:["New American food", "coctail bar", "music"],hours:["evening"],img:"img\/lobster.jpg",openTime:"5PM",closeTime:"9PM",desc:"Market-fresh American eats in rustic-chic surrounds with antique china & wild game door knockers."},
  {name:"Park Kitchen",price:3,type:["bar", "food"],diet:null,atmosphere:["New American food"],hours:["evening"],img:"img\/park_kitchen.jpg",openTime:"5PM",closeTime:"9PM",desc:"Innovative New American fare is offered in a snug, comfy space with an open kitchen."},
  {name:"Cinema 21",price:1,type:["entertainment"],diet:null,atmosphere:["cinema"],hours:["afternoon", "evening", "late-night"],img:"img\/cinema21.jpg",openTime:"3PM",closeTime:"12AM",desc:"Independently-owned movie theatre in Portland, Oregon featuring art house films."},
  {name:"Mission Theater",price:1,type:["entertainment", "bar"],diet:null,atmosphere:["cinema", "music", "events"],hours:["afternoon", "evening"],img:"img\/mission.jpg",openTime:"3PM",closeTime:"12AM",desc:"Remodeled evangelical mission with pub food, beer & a theater with balcony offering films & shows."},
  {name:"ComedySportz",price:1,type:["entertainment"],diet:null,atmosphere:["comedy", "improv"],hours:["evening"],img:"img\/sports.jpg",openTime:"5PM",closeTime:"10PM",desc:"Longtime destination for improv comedy shows in an intimate theater with audience participation."},
  {name:"Voicebox Karaoke",price:2,type:["entertainment", "bar"],diet:null,atmosphere:["karaoke"],hours:["evening", "late-night"],img:"img\/voicebox.jpg",openTime:"4PM",closeTime:"12AM",desc:"Enjoy private suite karaoke. Perfect for birthdays, bachelorette parties and any excuse to get friends together."},
  {name:"Northwest Childrens Theater",price:2,type:["entertainment"],diet:null,atmosphere:["theater", "family-friendly"],hours:["morning", "afternoon"],img:"img\/childrens_theater.jpg",openTime:"9AM",closeTime:"5PM",desc:"The mission of Northwest Children\u2019s Theater and School is to educate, entertain and enrich the lives of young audiences. NWCT produces four Mainstage shows per year and administers one of the largest theater schools on the west coast."},
  {name:"Planet Granite",price:2,type:["entertainment"],diet:null,atmosphere:["rock climbing", "gym", "yoga"],hours:["early-morning", "morning", "afternoon", "evening", "late-night"],img:"img\/granite.jpg",openTime:"6AM",closeTime:"11PM",desc:"Urban climbing playground."},
  {name:"Portland Center Stage at The Armory",price:2,type:["entertainment"],diet:null,atmosphere:["performing arts"],hours:["evening"],img:"img\/centerstage.jpg",openTime:"10AM",closeTime:"11PM",desc:"A look at Portland Center Stage at The Armory's history, from our founding as a Portland branch of the Oregon Shakespeare Festival to becoming nationally recognized by Theatre Communications Group as one of the largest regional theater companies in the United States"},
  {name:"The Armory",price:3,type:["entertainment"],diet:null,atmosphere:["performing arts"],hours:["evening"],img:"img\/armory.jpg",openTime:"10AM",closeTime:"11PM",desc:"The Armory is a gorgeous, renovated community space housing some of the finest performing arts Portland has to offer."},
  {name:"Portland Institute for Contemporary Art",price:3,type:["entertainment"],diet:null,atmosphere:["art", "performing arts"],hours:["afternoon"],img:"img\/pica.jpg",openTime:"11AM",closeTime:"5PM",desc:"The Portland Institute for Contemporary Art is a contemporary performance and visual arts organization, dedicated to sharing art with the city and region."},
  {name:"Portland Columbia Symphony Ochestra",price:3,type:["entertainment"],diet:null,atmosphere:["performing arts"],hours:["evening"],img:"img\/pcsc.jpg",openTime:"11AM",closeTime:"10PM",desc:"Portland Columbia Symphony Orchestra (PCSO) is a not-for-profit service organization dedicated to presenting quality performances of standard, worthy but rarely performed, and new orchestral repertoire."}
];

let downtownPlacesArray = [
  {name:"Ground Kontrol",price:2,type:["entertainment", "bar"],diet:["gluten-free"],atmosphere:["family-friendly", "arcade", "casual"],hours:["afternoon", "evening", "late-night"],img:"img\/groundkontrol.png",openTime:"12AM",closeTime:"2:30AM",desc:"Ground Kontrol is the West Coast\u2019s premier classic arcade. We preserve and celebrate video gaming\u2019s \u201cgolden age\u201d by operating over 60 classic video games and 27 pinball machines, feature a full-service bar after 5PM, host DJs, comedy shows, trivia nights, game tournaments, and Rock Band karaoke, and are available for public and private event rentals."},
  {name:"Departure Restaurent + Lounge",price:3,type:["bar", "food"],diet:["gluten-free", "vegan"],atmosphere:["upscale", "views", "casual"],hours:["evening", "late-night"],img:"img\/departure.jpg",openTime:"4PM",closeTime:"11PM",desc:"Floating atop the landmark Meier & Frank Building, Departure\u2019s ambitious menu captivates diners with its masterful remix of authentic coastal cuisines."},
  {name:"Living Room Theaters",price:2,type:["entertainment", "food"], diet:["gluten-free"], atmosphere:["family-friendly", "casual", "theater", "date night", "indie films", "food & wine"], hours:["afternoon", "evening", "late-night"], img: "img\/living-room-theater.png", openTime:"12PM", closeTime: "10PM", desc: "Living Room Theaters is a visionary new concept created by longtime filmmakers. We set out to reinvent the way films are viewed and distributed. And to change everything we didn't like about conventional and art house movie theaters - from the film selection to the lobby ambiance, food, seating and service. Welcome to the new evolution of cinema - Living Room\u00ae Theaters -- the sophisticated yet superbly comfortable environment that combines a European style caf\u00e9 and lounge with a relaxing place to see wonderful movies. Cinema has come to its senses."},
  {name:"Club Privata",price:3,type:["bar", "entertainment", "food"],diet:["gluten-free", "vegan"],atmosphere:["upscale", "views", "dancing", "club", "exotic", "private"],hours:["evening", "late-night"], img:"img\/privata.jpg",openTime:"8PM",closeTime:"2AM",desc:"Welcome to Humptown! Willamette Week's new sex advice column written by Portland sex educator and intimacy coach, Stella Harris."},
  {name:"Pioneer Place",price:3, type:["cafe", "entertainment", "food", "shopping"], diet:null, atmosphere:["family-friendly", "casual", "food", "shopping", "clothing", "high end"], hours:["morning", "afternoon", "evening"],img:"img\/pioneer.png",openTime:"10AM",closeTime:"8PM",desc:"Where downtown Portland comes to life. Downtown Portland is buzzing with activity. And it's not just the coffee. There is an energy here that charges every moment with fun and excitement. In the heart of downtown, you'll find Pioneer Place \u2013 four city blocks filled with shopping, dining and entertainment. Add tax-free shopping, and you're certain to have the time of your life."},
  {name:"Union Way", price:3,type:["shopping"],diet:null, atmosphere:["family-friendly", "local designers", "retail", "clothing", "shop", "food"], hours:["morning", "afternoon", "evening"], img:"img\/union.png", openTime:"11AM", closeTime:"7PM",desc:"Union Way, a modern arcade connecting downtown Portland\u2019s West End with the Pearl District, opened for business in summer 2013. Converted from two former nightclubs, the corridor packs various businesses into a covered galleria that links Powell\u2019s City of Books to the Ace Hotel. With nine shops ranging in size from 187 to 1,500 square feet, the bright alleyway, lit with skylights, is the perfect bridge to connect the city\u2019s newest shopping neighborhood, the West End, to the Pearl District, with its many boutiques and galleries. Danner, the iconic Oregon boot brand, has opened its first ever stand-alone retail shop in the alley, alongside high-end outfitter Will Leather Goods, another established Oregon company."},
  {name:"Radish Underground",price:3,type:["shopping"],diet:null,atmosphere:["family-friendly", "retail", "casual", "shop", "clothing", "local designers", "boutique"],hours:["morning", "afternoon", "evening"],img:"img\/radish.png",openTime:"11AM",closeTime:"6PM", desc: "Radish Underground is a woman's boutique featuring independent fashion designers from Portland, Or and around the world located in Downtown Portland's West End."},
  {name:"Al\u2019s Den at Crystal Hotel",price:2,type:["bar", "entertainment", "food"],type:["gluten-free", "organic"],atmosphere:["live music", "music", "food", "bar"],hours:["afternoon", "evening", "late-night"],img:"img\/al.png",openTime:"4PM",closeTime:"11PM",desc:"Head downstairs at the Crystal Hotel to hang out in this music venue named for Al Winter, Portland's gambling overlord who, in the 1940s, managed his vast empire that spanned the Pacific Northwest and into Las Vegas from this very location. Today, we hold live music, artist residencies, pre- and post-concert performances and more."},
  {name:"Old Town Pizza",price:1,type:["food", "bar"],diet:null,atmosphere:["family-friendly", "casual"],hours:["afternoon", "evening", "late-night"],img:"img\/oldtownpizza.jpg",openTime:"11AM",closeTime:"11PM",desc:"Framed in the heart of the Portland, Oregon, Old Town emulates the spirit of our region with every beer we brew and every pizza we make. Inspired by the untamed attitude and the support of our driven community, you may consider this our love letter to the Pacific Northwest."},
  {name:"Roseland Theater",price:3,type:["entertainment"],diet:null,atmosphere:["casual, music"],hours:["evening", "late-night"],img:"img\/roselandtheater.jpg",openTime:"varies ",closeTime:"varies",desc:"Managed by Double Tee Concerts, The Roseland Theater in Portland is one of the premier showcase concert venues in America."},
  {name:"Hobo's Restaurant & Lounge",price:2,type:["food", "bar"],diet:["vegan"],atmosphere:["lounge", "LGBTQIA"],hours:["afternoon", "evening", "late-night"],img:"img\/hobos.jpg",openTime:"4PM",closeTime:"2AM",desc:"Hobo's restaurant offers fine dining in a comfortable lounge atmosphere. Located in Portland, Oregon, Hobo's has been a part of the Northwest's dining and lounge experience for over twenty five years."},
  {name:"The Original Dinerant",price:2,type:["food", "cafe"],diet:["gluten-free", "vegan", "raw", "organic"],atmosphere:["coffee", "good eats", "local", "family-friendly", "casual"],hours:["early-morning", "morning", "afternoon", "evening"], img:"img\/theoriginal.jpg",openTime:"6AM",closeTime:"10PM",desc:"The Original is the perfect destination for unexpected all-day Portland dining. Our inspired menu of eclectic American cuisine takes on regional favorites and modifies them with local and seasonal ingredients resulting in flavors and textures unique to the Pacific Northwest. Unwind at our candle-lit bar for that much deserved post-prandial nightcap. At the Original, we honor the past as we listen in on the pulse of Portland\u2019s adventurous and evolving tastes."},
  {name:"Saucebox",price:2,type:["bar", "cafe", "food"],diet:["gluten-free", "organic"],atmosphere:["chic", "upscale", "asian fusion", "pacific island cuisine", "good eats"],hours:["evening", "late-night"],img:"img\/saucebox.jpg",openTime:"4PM",closeTime:"2AM",desc: "Established in 1995, saucebox has maintained its reputation in the city as the place for the finest in pan-asian and pacific island cuisine with its insider vibe and unique presence. Unforgettable dishes and innovative cocktails have given saucebox national notoriety in The New York Times, Bon Appetit Magazine, Travel & Leisure and The Wall Street Journal \u2013 but it\u2019s local attention and accolades like being honored as \u201cRestaurant of the Year\u201d In 1998 by the Oregonian that make saucebox a landmark of Portland restaurant and lounge scene."},
  {name:"Stumptown Coffee Roasters",price:1,type:["cafe"],diet:["vegan", "organic"],atmosphere:["coffee", "drip coffee", "pastries", "good eats", "family-friendly", "casual"],hours:["early-morning", "morning", "afternoon"],img:"img\/stumptown.jpg",openTime:"6AM",closeTime:"9PM",desc:"Stumptown Coffee Roasters is a coffee roaster and retailer based in Portland, Oregon, United States. The chain's flagship caf\u00e9 and roastery opened in 1999."},
  {name:"Brunch Box",price:1,type:["food"],diet:["vegan", "raw"],atmosphere:["foodie", "casual", "bakery", "limited seating", "local"],hours:["morning", "afternoon"],img:"img\/bluestardonuts.jpg",openTime:"7AM",closeTime:"8PM",desc:"This upmarket brioche-donut bakery features creative flavors & organic, locally sourced ingredients."},
  {name:"Little Bird Bistro",price:3,type:["food"],diet:["vegan", "organic", "gluten-free"],atmosphere:["breakfast", "brunch", "outdoor seating", "takeout", "local", "upscale", "happy hour", "good eats"],hours:["morning", "afternoon", "evening"], img:"img\/imperial.jpg", openTime:"7AM", closeTime:"10PM", desc:"Eclectic, inventive French bistro fare served in a sexy spot with red banquettes & mezzanine level."},
  {name:"Imperial",price:3,type:["food", "bar"],diet:["organic"],atmosphere:["upscale", "happy hour"],hours:["morning", "afternoon", "evening"],img:"img\/imperial.jpg",openTime:"7AM",closeTime:"10PM",desc:"At Imperial, Chef Paley explores menu ideas that have historic significance and uses cooking methods and ingredients from Oregon\u2019s diverse bounty. The most prominent feature of Imperial\u2019s kitchen is the impressive wood fire grill and rotisserie that incorporate the use of native hard and fruitwoods. Inspired by warm and primitive burning campfire, and big open spaces of the Pacific Northwest, Imperial concentrates on healthy and uncomplicated preparations, serving the community by remembering its past and providing a warm, welcoming and generous place to eat."},
  {name:"Spella",price:2,type:["food", "cafe"],diet:["organic"],atmosphere:["coffee", "pastries", "house-roasted beans", "espresso"],hours:["early-morning", "morning", "afternoon"],img:"img\/spella.png",openTime:"6AM",closeTime:"3PM",desc:"From the careful selection, roasting, and blending of coffee beans, to the hand-pulled extraction of the ristretto, Spella Caff\u00e8 takes pride in serving espresso in the Italian tradition. Visit us at our caff\u00e8 in downtown Portland for fresh-brewed, single-origin coffee; handcrafted, made-to-order chai and tea; Italian sodas; local pastry and biscotti; and gelato, sorbetto, and affogato."},
  {name:"Montbell",price:2,type:["shopping"],diet:null,atmosphere:["sporting goods", "sightseeing tours", "alpine climbing gear", "backpacking & camping"],hours:["early-morning", "morning", "afternoon"],img:"img\/montbell.jpg",openTime:"7AM",closeTime:"6PM",desc:"Montbell is an outdoor equipment and clothing company, offering \"Light & Fast\u00ae\" products to outdoor enthusiasts since 1975. Known for introducing feather light yet sweater warm down jackets and world patented stretchy sleeping bags to wilderness lovers around the world. At Montbell, we strive to create more than just products, but trusted tools built for adventure."},
  {name:"Pedego Electric Bikes Portland",price:3,type:["shopping"],diet:null,atmosphere:["sporting goods", "bicycle store", "bicycle materials", "rentals"],hours:["morning", "afternoon"],img:"img\/pedego.png",openTime:"7AM",closeTime:"6PM",desc:"Pedego Portland is like heaven when you\u2019re shopping for an electric bike. The experience is unmatched anywhere on Earth. We are passionate electric bike experts who treat our customers like dear friends because that\u2019s exactly what you are to us. We put our hearts into helping you find the perfect electric bicycle, and making sure you get the most out of it. When you walk into Pedego Portland, you\u2019ll find a welcoming and comfortable atmosphere where you\u2019ll be treated like family. "}
];

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

// Neighborhood objects
function filterByPrice(inputPrice) {
  var neighborhoods = [pearl, downtown];

  for (i = 0; i < neighborhoods.length; i++) {
   if (inputPrice === neighborhoods[i].price) {
     neighborhoods[i].price;
   }
 }
}

//User logic
function time(){ //fluctuate the css stylesheet
  var time = new Date();
  // var hourNow = time.getHours();

  var hourNow = 20;

  if (hourNow > 18) {
    $("head").append('<link href="css/night.css" rel="stylesheet" type="text/css">');
  } else {
    $("head").append('<link href="css/coolearth.css" rel="stylesheet" type="text/css">');
  }
}

function displayAtmosphere(array) {
  for(var i = 0; i < array.length; i ++){
    '<li>' + array[i] + '</li>';
  }
}

$(function() {
  time();
  $("#filter-form").submit(function(event) {
    event.preventDefault();
    $(".intro").hide();
    $("#user-output").empty();

    var inputPrice = parseInt($("#inputPrice").val());
    var inputLocation = $("input:radio[name=location]:checked").val();
    var inputType = $("#inputType").val();
    var inputHours = $("input:radio[name=hours]:checked").val();

    $("input:checkbox[name=diet]:checked").each(function(){
      var inputDiet = $(this).val();
    });

    var results = filterByPlaceProperties(inputHours, pearlPlacesArray);
    console.log(results);
    results = filterByPlaceProperties(inputType, results);
    console.log(results);
    results = filterByPlaceProperties(inputPrice, results);
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
    });


    $("#filter-form").toggleClass("hide");
  });

  $("#hamburger-nav-icon").click(function(){
    $("#filter-form").toggleClass("hide");
  });

});
