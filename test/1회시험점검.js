const sum = ( t, r) =>  {r + t} 





if(true) console.log(123);



if ( '' ) console.log ( "진실 같은 값")
else console.log ( "거짓 같은 값");


const o = { 
  a : 1, 
  b : {
     c : 2 
  } 
}

const obj1 = { z : 1} ;   //  주소값: 감일동한라비발디1차
const obj2 = { z : 1} ;   //  주소값: 위례동한라비발디2차    

console.log(obj1);
console.log(obj2);
console.log(JSON.stringify(obj1)); //객체를 문장렬 형태로 뿌려주는 함수
console.log(JSON.stringify(obj2)); //객체를 문장렬 형태로 뿌려주는 함수

console.log( obj1 === obj1); //o1 과 o1의 주소값을 비교했더니 둘다 감일한라비발디1차
console.log( obj1 === obj2); // 타입과 주소 값을 둘다 비교했더니 false    (감일동한라비발디1차 (다름) 위례동한라비발디2차)
console.log( obj1 == obj2);  // 주소 값만 비교해봐도 false

console.log(typeof '시은이')
console.log(typeof 123)
console.log(typeof obj1);
console.log(typeof obj2);

console.log(typeof obj1 === typeof obj2);




console.log( JSON.stringify(obj1) ==  JSON.stringify(obj2) );
console.log( JSON.stringify(obj1) ===  JSON.stringify(obj2));



///////////////////복습////////////////////////
const value1 = 123; 
const value2 = "123"; 

console.log(value1);
console.log(value2);


console.log(typeof value1);
console.log(typeof value2);



console.log(value1 == value2);   //값만 비교했기때문에 참
console.log(value1 === value2);  // 값이랑 typeof 값도 비교했으니까 거짓


let zero = 0;
// let result =  Boolean(zero + '');  //정답1
result =  Boolean(!zero);
console.log( result ) 

console.log( zero ) ;

//////////////////////////


// if만약
// else if 위에께 아니라면 만약
// else 이도저도 아닌 이거지?

let deliveyStatus = '준비중';
let nameValue = '채병주';

if (deliveyStatus === '접수'){
  console.log('주문이 접수되었습니다.');
}
else if (deliveyStatus === '준비중' && nameValue === '채병주'){  // deliveyStatus 가 배송중 이거나 혹은 (and) 채병주 이면은...
  console.log('상품을 준비중입니다.');
}
else if (deliveyStatus === '배송중' || nameValue ==="채병주" ) { // deliveyStatus 가 배송중 이거나 혹은 (or) 채병주 이면은...
  console.log('배송 중입니다.');
}
else if (deliveyStatus === '배송 완료') {
  console.log('배송이 완료되었습니다.');
}
else {
  console.log(' 현재 상황을 알 수 없습니다. ');
}

// console.log('이프문 체크완료!')


///////////////////////////////////////

const calculator = {
  x: 10,
  y: -7,
  modulo : () => {
    return calculator.x % calculator.y;
  },
  divide : () => {
    return calculator.x / calculator.y;
  },
  add : () => {
    return calculator.x + calculator.y;
  },
  subtract : () => {
    return calculator.x - calculator.y;
  },
  multiply : () => {
    return calculator.x * calculator.y;
  }
}