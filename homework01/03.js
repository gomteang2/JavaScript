// 3. 주류 판매 가능 여부2. 
// 
// "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.

const AdultAge = 19

const canSellAlcohol = (registrationCard) => {
  if (registrationCard.age < AdultAge) {
    return false
  }
  else if (registrationCard.age >= AdultAge) {
    return true
  }
}

let registrationCard1 = {
  name : '임시은',
  age : 8,
  gender : 'female',
}

let registrationCard2 = {
  name : '채병주',
  age : 28,
  gender : 'male',
}

let result1 = canSellAlcohol(registrationCard1)
let result2 = canSellAlcohol(registrationCard2)

console.log(result1)
console.log(result2)