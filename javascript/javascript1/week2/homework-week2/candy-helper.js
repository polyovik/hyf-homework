const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;
const CANDIES_PRICES_PER_GRAM = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  ['chewing-gum']: 0.3,
};

function addCandy(candyType, weight) {
  let pricePerGram = CANDIES_PRICES_PER_GRAM[candyType];
  let candyPrice = pricePerGram * weight;
  boughtCandyPrices.push(candyPrice);
}

function calculatePriceSumm() {
  let candySumm = 0;
  boughtCandyPrices.forEach((price) => {
    candySumm += price;
  });
  return candySumm;
}

function canBuyMoreCandy() {
  const priceSumm = calculatePriceSumm();
  if (priceSumm <= amountToSpend) {
    console.log(`Price is $${priceSumm}. You can buy more, so please do!`);
  } else {
    console.log(`Price is $${priceSumm}. Enough candy for you!`);
  }
}

addCandy('sweet', 20);
addCandy('toffee', 20);
addCandy('chocolate', 20);
addCandy('chewing-gum', 20);

console.log(boughtCandyPrices);
console.log(amountToSpend);

canBuyMoreCandy();
