// 4. 할인가 계산

const PRICE = 18700

let getDiscountedPrice = (originalPrice, discountPercent) => originalPrice - (discountPercent / 100 * originalPrice)

const result = getDiscountedPrice(PRICE, 20)

console.log (result)