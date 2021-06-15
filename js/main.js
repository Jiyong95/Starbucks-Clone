const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//input이 아닌 돋보기를 누르면 focus가 되지 않음. -> 돋보기를 눌러도 input focus가 되도독 작성
searchEl.addEventListener('click', () => {
	searchInputEl.focus();
});

//focus되면 focused 클래스 추가
searchInputEl.addEventListener('focus', () => {
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

/* _.throttle() : lodash에서 가져온 js라이브러리에 있는 것
_.throttle(함수, 시간) : 함수가 호출 사이에 딜레이를 둠. -> 함수가 엄청 실행되지 않도록 막음.
*/
window.addEventListener('scroll', _.throttle(() => {
	console.log(window.scrollY);
	if (window.scrollY > 500){
		/*badge 숨기기
		방법 .1) badgeEl.style.display = 'none';
		방법 .2) gsap.to(요소, 지속시간, 옵션);
						요소에 지속시간에 걸쳐 옵션을 넣어줌.

		opacity는 화면에서 안 보이게하지 사라진 것은 아님.
		display만 안 쓰는 이유는 gsap은 숫자 값을 지속시간에 걸쳐 적용시켜주기 때문에,
		'none'이런 값은 애니매이션 효과를 못넣는다.*/
		gsap.to(badgeEl, .6, {
			opacity : 0,
			display: 'none'
		});
		// 버튼 보이기!
		gsap.to(toTopEl, .2, {
			x: 0 //x축으로 0px이동 
		});
	}
	else{
		//badge 보이기
		//badgeEl.style.display = 'block';
		gsap.to(badgeEl, .6, {
			opacity : 1,
			display: 'block'
		});
		// 버튼 숨기기!
		gsap.to(toTopEl, .2, {
			x: 100 //x축으로 100px이동 
		});
	}
}, 300));

// to-top기능
toTopEl.addEventListener('click', () => {
	gsap.to(window, .7, {
		scrollTo: 0
	});
	// window : 현재 보여지는 창의 정보
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEls, index) => {
	gsap.to(fadeEls, 1, {
		//0.7s -> 첫 번째요소 출력, 1.4s -> 두 번째, 2.1s -> 세 번째
		delay : (index + 1) * .7,
		opacity : 1
	});
});

//SWIPER
//new Swiper(선태자, 옵션)
new Swiper('.notice-line .swiper-container', {
	direction : 'vertical',
	autoplay : true, //자동재생
	loop: true, //반복재생여부
});

new Swiper('.promotion .swiper-container', {
	slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
	spaceBetween: 10, //슬라이드 사이 여백
	centeredSlides: true, //1번 슬라이드가 가운데 보이기
	loop: true,
	//autoplay: {
	//	delay: 5000, //5000ms = 5s
	//},
	pagination: {
		el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
		clickable: true //페이지 번호 요소 제어 여부
	},
	navigation:{
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next'
	}
});
// Awards 슬라이드 부분
new Swiper('.awards .swiper-container', {
	direction: 'horizontal', //default값이라 안써도 됨.
	autoplay: true, //자동재생
	loop: true, //반복재생
	spaceBetween: 30, //슬라이드 사이 여백
	slidesPerView: 5, //하나의 화면에 보여지는 슬라이드 수
	navigation: {
		prevEl: '.awards .swiper-prev',
		nextEl: '.awards .swiper-next'
	}
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionIcon = promotionToggleBtn.querySelector('.material-icons');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		//숨김처리
		promotionEl.classList.add('hide');
		promotionIcon.textContent = 'download';
	} else {
		//보임처리
		promotionEl.classList.remove('hide');
		promotionIcon.textContent = 'upload';
	}
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//ES6 함수 선언
const floatingObject = (selector, delay, size) => {
	// gsap.to(요소, 시간(s), 옵션); : javascript 애니매이션 LIBRARY
	gsap.to(selector, random(1.5, 2.5),
	{
		// y축 20이동
		y: size,
		//무한 반복
		repeat: -1,
		// 재생된 애니매이션을 뒤로 재생하는 것
		yoyo: true,
		// 타이밍 함수. gsap easing library에서 가져옴
		ease: Power1.easeInOut,
		delay: random(0, delay)
	});
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// ScrollMaginc library에서 지원하는 함수
// section태그의 class=scroll-spy요소
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((spyEl) => {
	new ScrollMagic
	.Scene({
		triggerElement: spyEl, //보여짐 여부를 감시할 요소
		triggerHook: .8 // 뷰포트를 세로로 0~1이라하면 0.8지점 -> 감시할 요소가 0.8지점에 이르면 setClassToggle()실행
	})
	.setClassToggle(spyEl, 'show')  //spyEl에 show클래스를 추가함
	.addTo(new ScrollMagic.Controller());
});

// 해당 연도 구해서 입력하기
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();

