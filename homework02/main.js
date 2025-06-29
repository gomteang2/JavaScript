const element = document.querySelectorAll('.carousel__container')[0];
const divList = Array.from(element.querySelectorAll('div'));

let width = 20;
divList.forEach((div,index) =>{
  const style = getComputedStyle(div)
  width += Number(style.width.replace('px',''))
})
console.log(element)
element.style.width = width + 'px'

const backImages = document.querySelector('.data__container__inner');
console.log(backImages)

const backImageList = Array.from(backImages.querySelectorAll('img'));

backImageList.forEach((img,index) =>{
  img.addEventListener("mouseenter", ()=>{
    img.classList.add('active');
  })
  
  img.addEventListener("mouseleave", ()=>{
    img.classList.remove('active');

  })
})

// 여기서 부턴 넘기는 이벤트
let selectedIndex = 0;

const contentWrapper = document.querySelector('.carousel__container');
const contents = contentWrapper.querySelectorAll('.carousel__contents')

const move = (parameterIndex, btnType) =>{
    // 다음버튼을 눌렀는데
    if(btnType === 'next'){
      if(selectedIndex === 2) {
        parameterIndex = 0
      }
    }
    // 이전버튼을 눌렀는데?
    else  if(btnType === 'prev'){
      if(selectedIndex === 0) {
        parameterIndex = 2
      }
    }

  const moveTargetContent = contents[parameterIndex];
  console.log(moveTargetContent)
  const distance = getComputedStyle(moveTargetContent).getPropertyValue('width').replace('px','') *parameterIndex;

  //contentWrapper.style.setProperty('transform', 'translateX(-'+ distance +')')
  contentWrapper.style.marginLeft = (distance *-1) + "px";

  document.querySelector('.footer').querySelector('.selected__number').innerText = (parameterIndex +1);

  selectedIndex = parameterIndex;

}

document.getElementById('nextButton').addEventListener('click', () => {
    move(selectedIndex + 1 ,'next')
  })

document.getElementById('prevButton').addEventListener('click', () => {
    move(selectedIndex - 1,'prev')
  })
