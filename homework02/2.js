const carousel = document.querySelector('.wrapper__container')
const contentWrapper = carousel.querySelector('.carousel__track')
const contents = document.querySelectorAll('.carousel__contents')
const prevButton = document.getElementById('prev__button')
const nextButton = document.getElementById('next__button')

const SELECTED_CLASSNAME = 'active'
const slideWidth = 384
let selectedIndex = 0

function updateSlide(newIndex) {
  if (newIndex < 0 || newIndex >= contents.length) return

  // 슬라이드 이동
  contentWrapper.style.transform = `translateX(-${newIndex * slideWidth}px)`

  // 클래스 변경
  contents[selectedIndex].classList.remove(SELECTED_CLASSNAME)
  contents[newIndex].classList.add(SELECTED_CLASSNAME)

  selectedIndex = newIndex;

  settingTabindexControl();
}

const move = (parameterIndex) => {
  
const moveTargetContent = contents[parameterIndex]
const width = parseFloat(getComputedStyle(moveTargetContent).getPropertyValue('width'))
const distance = width * parameterIndex

contentWrapper.style.transform = `translateX(-${distance}px)`
selectedIndex = parameterIndex;
}

prevButton.addEventListener('click', () => {
  updateSlide((selectedIndex + 1) % contents.length);
  let nextIndex = selectedIndex + 1;
  if (nextIndex >= contents.length) nextIndex = 0;
  move(nextIndex);
  document.querySelector('.footer.selected__number').innerText = selectedIndex + 1
});

nextButton.addEventListener('click', () => {
  updateSlide((selectedIndex - 1 + contents.length) % contents.length);
  let prevIndex = selectedIndex - 1;
  if (prevIndex < 0) prevIndex = contents.length - 1;
  move(prevIndex);
  document.querySelector('.footer .selected__number').innerText = selectedIndex + 1
});

// Tabindex 제어
function settingTabindexControl() {
  contents.forEach((content, index) => {

    console.log(content)

    /*
    const isSelected = index === selectedIndex;

    // 게임 카드 내부 요소 전체 tabIndex 제어
    const focusables = content.querySelectorAll('button, h2, .game__card');
    focusables.forEach(el => {

      console.log(el)

      if (active) {
        el.removeAttribute('tabindex');
      } else {
        el.setAttribute('tabindex', '-1');
      }
    });

    // 게임카드 자체에도 접근 가능하게 하고 싶다면:
    const cards = content.querySelectorAll('.game__card');
    cards.forEach(card => {
      if (active) {
        card.setAttribute('tabindex', '0');
      } else {
        card.setAttribute('tabindex', '-1');
      }
    });*/
  });

  // 이전 / 다음 버튼은 항상 접근 가능
  prevButton.removeAttribute('tabindex');
  nextButton.removeAttribute('tabindex');
}

// 캐릭터 hover 효과
const characters = document.querySelectorAll('.character');
characters.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.classList.add('active');
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove('active');
  });
});
