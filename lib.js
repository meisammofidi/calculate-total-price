const collections = require('./data');

module.exports.calculateTotalPrice = function (...params) {
  const [numberOfItems, unitPrice, province] = [...params];

  // Parameters validation 
  if (!numberOfItems || !unitPrice || !province)
    throw new Error('numberOfItems, unitPrice, and province are required');

  if (typeof numberOfItems !== 'number' || numberOfItems <= 0)
    throw new Error('numberOfItems must be a positive number greater than zero');

  if (typeof unitPrice !== 'number' || unitPrice <= 0)
    throw new Error('unitPrice must be a positive number');

  if (typeof province !== 'string')
    throw new Error('province code must be string');

  const totalPrice = numberOfItems * unitPrice;
  const discountRate = getDiscountRate(totalPrice);
  let discountPrice = totalPrice;

  // Check if order value gets a discount
  if (discountRate)
    discountPrice = totalPrice - (totalPrice * discountRate) / 100;

  const rate = getTaxRate(province);
  if (!rate)
    throw new Error(`province input '${province}' is wrong or might not exists`);

  return discountPrice + (discountPrice * rate.taxRate) / 100;
};


function getDiscountRate(totalPrice) {
  const discounts = collections.discounts;

  if (totalPrice < 1000) return 0;

  const rate = discounts
    .sort((a, b) => b.orderValue - a.orderValue)
    .filter((item) => item.orderValue <= totalPrice)
    .map((m) => m.discountRate);

  return rate[0];
}

function getTaxRate(province) {
  const taxRates = collections.taxRates;
  const result = taxRates.find(
    (item) => item.province === province.toUpperCase()
  );

  return result;
}
