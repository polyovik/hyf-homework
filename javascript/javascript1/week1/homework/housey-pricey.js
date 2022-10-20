let petersHouseWidth = 8;
let petersHouseDepth = 10;
let petersHouseHeight = 10;
let petersHouseVolumeInMeters = petersHouseWidth * petersHouseDepth * petersHouseHeight;
let petersGardenSizeInM2 = 100;
let petersHouseCosts = 2500000;

petersHousePrice = petersHouseVolumeInMeters * 2.5 * 1000 + petersGardenSizeInM2 * 300;
console.log(petersHousePrice);

if (petersHousePrice < petersHouseCosts) {
    console.log("You are paying too much.");
} else {
    "The price is ok."
}

let juliasHouseWidth = 5;
let juliasHouseDepth = 11;
let juliasHouseHeight = 8;
let juliasHouseVolumeInMeters = juliasHouseWidth * juliasHouseDepth * juliasHouseHeight;
let juliasGardenSizeInM2 = 100;
let juliasHouseCosts = 1000000;

juliasHousePrice = juliasHouseVolumeInMeters * 2.5 * 1000 + juliasGardenSizeInM2 * 300;
console.log(juliasHousePrice);

if (juliasHousePrice < juliasHouseCosts) {
    console.log("You are paying too much.");
} else {
    console.log("The price is ok."); 
}