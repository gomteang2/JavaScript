// 5. 등급 판단

const gradFunction = (parameterScore) => {
  let resultObject = {
    score : parameterScore,
  }
  if (parameterScore >=90 ) {
   resultObject.grade = 'A'
   resultObject.description = '매우우수'
  }
  else if (parameterScore >=80 && parameterScore < 90) {
   resultObject.grade = 'B'
   resultObject.description = '우수'
  }
  else if (parameterScore >=70 && parameterScore < 80) {
   resultObject.grade = 'C'
   resultObject.description = '보통'
  }

  else if (parameterScore >=60 && parameterScore < 70) {
   resultObject.grade = 'D'
   resultObject.description = '미달, 통과 기준 근접'
  }

  else if (parameterScore < 60) {
   resultObject.grade = 'F'
   resultObject.description = '낙제'
  }

  return resultObject
}

const student1 = gradFunction (95)
console.log(student1);

const student2 = gradFunction (87)
console.log(student2)

const student3 = gradFunction (75)
console.log(student3)

const student4 = gradFunction (65)
console.log(student4)

const student5 = gradFunction (55)
console.log(student5)