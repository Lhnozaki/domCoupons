//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

let header = document.getElementById("disclaimer");

//console.log(header);

header.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

let brandOne = document.getElementById("brand1");

brandOne.textContent = "Nabisco";

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

let itemOne = document.getElementById("item1");

itemOne.textContent = "Cheeseburger Oreos";

//4. Target the div element with the id of 'price1' and update the content to $8.99.

let priceOne = document.getElementById("price1");

priceOne.textContent = "$8.99";

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

let discOneBtn = document.getElementById("discount1");

discOneBtn.textContent = "Free friends with purchase!";

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

let itemTwo = document.createElement("div");
let brandTwo = document.getElementById("brand2");
itemTwo.id = "item2";
itemTwo.textContent = "Hendrick's Gin";
brandTwo.appendChild(itemTwo);


//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

let priceTwo = document.createElement("div");
priceTwo.id = "price2";
priceTwo.textContent = "$34.99";
itemTwo.appendChild(priceTwo);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

let discThreeBtn = document.createElement("button");
discThreeBtn.id = "discount3";
discThreeBtn.textContent = "50% OFF Axe body soap!";
let blockThree = document.getElementsByClassName("block3");
blockThree[0].appendChild(discThreeBtn);


//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

let itemFour = document.getElementsByClassName("item")[0];
itemFour.innerHTML = "Orange Chicken";
//console.log(itemFour);

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

let discFourBtn = document.createElement("button");
discFourBtn.className = "discount";
discFourBtn.textContent = "Free T-Shirt and Fortune Cookie with Purhase!";
let panda = document.getElementsByClassName("block1")[1];
//console.log(panda);
panda.appendChild(discFourBtn);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

let redHoodie = document.getElementsByClassName("brand")[1];
//console.log(redHoodie);
redHoodie.textContent = "Uniqlo";

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

let hoodiePrice = document.getElementsByClassName("price")[1];
hoodiePrice.textContent = "$10,000.00";

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

let headphones = document.createElement("div");
headphones.className = "brand";
headphones.textContent = "HiFiman Shangri-La";
blockThree[1].appendChild(headphones);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

let itemSix = document.createElement("div");
itemSix.className = "item";
itemSix.textContent = "Electronstatic Headphones";
blockThree[1].appendChild(itemSix);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

let priceSix = document.createElement("div");
priceSix.className = "price";
priceSix.textContent = "18,000.00";
blockThree[1].appendChild(priceSix);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

let btnSix = document.createElement("button");
btnSix.className = "discount";
btnSix.textContent = "Free Barry Manilow CD with purchase!";
blockThree[1].appendChild(btnSix);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

let unicBrand = document.getElementsByClassName("brand")[3];
unicBrand.textContent = "H&M";

let unicItem = document.getElementsByClassName("item")[3];
unicItem.textContent = "Unicorn-Head Slippers";

let unicPrice = document.getElementsByClassName("price")[3];
unicPrice.textContent = "$21.99";

let unicBtn = document.getElementsByClassName("discount")[3];
unicBtn.textContent = "Free knee-high tube socks with purchase!";

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

let chipBrand = document.getElementsByClassName("brand")[4];
chipBrand.textContent = "Frito Lay";

let chipItem = document.getElementsByClassName("item")[4];
chipItem.textContent = "Poppin' Jalapeno Doritos";

let chipPrice = document.getElementsByClassName("price")[4];
chipPrice.textContent = "$7.77";

let chipBtn = document.getElementsByClassName("discount")[4];
chipBtn.textContent = "33% OFF any 6 pack Budweiser or Bud Light!";

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

let dogBrand = document.getElementsByClassName("brand")[5];
dogBrand.textContent = "PetCo";

let dogItem = document.getElementsByClassName("item")[5];
dogItem.textContent = "Baby Puggy";

let dogPrice = document.getElementsByClassName("price")[5];
dogPrice.textContent = "Priceless";

let dogBtn = document.getElementsByClassName("discount")[5];
dogBtn.textContent = "No Discounts. This cutie is worth every penny!";

//Final Boss 
//Create your own product for the last three sections.

let image = document.getElementsByTagName("img");

/// first custom item

image[10].src = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRK1J7yTY0OEIvPFev6o0l7LdEZg-hlDkCZ6yK9X-ulTiSncYkKRlUnY1ffMPq-WocMpu2qK1wohU4dgQGNDeTEOFoWSfWfARXxWtSIXJ7YRnGSBqZpTnmm3w&usqp=CAc";

let teleBrand = document.getElementsByClassName("brand")[6];
teleBrand.textContent = "Fender";

let teleItem = document.getElementsByClassName("item")[6];
teleItem.textContent = "Telecaster 97";

let telePrice = document.getElementsByClassName("price")[6];
telePrice.textContent = "1299.99 USD";

let teleBtn = document.getElementsByClassName("discount")[6];
teleBtn.textContent = "Free Strap & picks!";

/// define elements

let brand = document.createElement("div");
brand.className = "brand";
let item = document.createElement("div");
item.className = "item";
let price = document.createElement("div");
price.className = "price";
let buttons = document.createElement("button");
buttons.className = "discount";

/// Second custom item

image[11].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmBdC77lcgt6X4NSzszyVQSnO5RsBjKPAk2lDGPhVaXrpC5IC";

let shoes = document.getElementsByClassName("block2")[3];
shoes.appendChild(brand);
shoes.appendChild(item);
shoes.appendChild(price);
shoes.appendChild(buttons);

let shoeBrand = document.getElementsByClassName("brand")[7];
shoeBrand.textContent = "Adidas";

let shoeItem = document.getElementsByClassName("item")[7];
shoeItem.textContent = "Originals AR Sneaker";

let shoePrice = document.getElementsByClassName("price")[7];
shoePrice.textContent = "150.00 USD";

let shoeBtn = document.getElementsByClassName("discount")[7];
shoeBtn.textContent = "Free socks";

//console.log(shoes);

/// third custom item

image[12].src = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThnRzergfVxEvJ7Fp7iIo5aC8Ux7cqufK67bt4AkCAdiziZwR5alLG6KJbwmBhizS5jOE4B6R2dO27STFVZ81WXbQFX7NkiDjqqgSy3g7Wc3oXV6D9AlPj3g&usqp=CAc";

let brandG = document.createElement("div");
brandG.className = "brand";
let itemG = document.createElement("div");
itemG.className = "item";
let priceG = document.createElement("div");
priceG.className = "price";
let buttonsG = document.createElement("button");
buttonsG.className = "discount";

let gloves = document.getElementsByClassName("block3")[3];
gloves.appendChild(brandG);
gloves.appendChild(itemG);
gloves.appendChild(priceG);
gloves.appendChild(buttonsG);

let gloveBrand = document.getElementsByClassName("brand")[8];
gloveBrand.textContent = "Everlast";

let gloveItem = document.getElementsByClassName("item")[8];
gloveItem.textContent = "Red Lace N Loop Boxing Gloves";

let glovePrice = document.getElementsByClassName("price")[8];
glovePrice.textContent = "45.00 USD";

let gloveBtn = document.getElementsByClassName("discount")[8];
gloveBtn.textContent = "Free case with purchase!";