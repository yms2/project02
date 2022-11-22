const lang = document.querySelector(".header_util > .lang > a");
const langBox = document.querySelector('.lang_box');

lang.addEventListener('mouseover',()=>{
    langBox.style.display = 'block'
})
lang.addEventListener('mouseout',() =>{
    langBox.style.display = 'none'
})

const nav = document.querySelector('ul.gnb')
const navList = document.querySelector('.lnb_inner')

nav.addEventListener('mouseover',()=>{
	navList.style.display = 'block'
	navList.style.display = 'flex'
})
nav.addEventListener('mouseout',() =>{
    navList.style.display = 'none'
})


const slideList = document.querySelector('ul.slide_list');
	const slideCont = slideList.querySelectorAll('.slide_cont');
	const contLen = slideCont.length; // li 길이
	const slideContWidth = 100 / (contLen + 2); // li 너비 계산
	const btnSlide = document.querySelectorAll('.btn_slide');
	let curIdx = 0;
	let curBtn = btnSlide[curIdx];
	curBtn.classList.add('active');

	slideList.style.width = `${100 * (contLen + 2)}%`; // ul 너비 지정
	slideCont.forEach((element) => {
		element.style.width = `${slideContWidth}%`;
	}); // li 너비 지정