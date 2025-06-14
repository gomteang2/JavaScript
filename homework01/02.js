// 2. 원가 계산

const TAX = 3.3

const calculateOriginalPrice = (priceWithTax) => priceWithTax - priceWithTax / 100 * 3.3 

let resultValue =calculateOriginalPrice(1000);

console.log(resultValue);