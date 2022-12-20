const lang = document.querySelector(".btn_lang");
const langBox = document.querySelector('.lang_box');
const html = document.querySelector('html');

lang.addEventListener('click',()=>{
    langBox.style.display = 'block'

    html.addEventListener('click', function(e){
        if(!closeCheck(e.target)){
            langBox.style.display = 'none';

            this.removeEventListener('click', arguments.callee);
        }
        function closeCheck(click){
            while (click.className !== 'wrap'){
                if(click.className === 'header_util'){
                    return true;
                }
                click = click.parentNode;
            }
            return false;
        }
    })
});

// gnb 호버 시 lnb출력
const gnb = document.querySelector('ul.gnb');
const bgLnb = document.querySelector('.bg_lnb');

gnb.addEventListener('mouseenter', () => {
	gnb.classList.add('hover');
	bgLnb.classList.add('active');
});
bgLnb.addEventListener('mouseenter', () => {
	gnb.classList.add('hover');
	bgLnb.classList.add('active');
});
gnb.addEventListener('mouseleave', () => {
	gnb.classList.remove('hover');
	bgLnb.classList.remove('active');
});

const slideList = document.querySelector('ul.slide_list');
	const slidePage = slideList.querySelectorAll('.slide_page');
	const pageLen = slidePage.length; // li 길이
	const slidePageWidth = 100 / (pageLen + 2); // li 너비 계산
	const pageNum = document.querySelector('.page_num');
	const state = document.querySelector('.state');
	let curIdx = 1;
	let curPage = slidePage[curIdx]; // 활성화 슬라이드 선언
	curPage.classList.add('active');

	slideList.style.width = `${90 * (pageLen + 3)}%`; // ul 너비 지정
	slidePage.forEach((element) => {
		element.style.width = `${slidePageWidth}%`;
	}); // li 너비 지정

	// 슬라이드 양 끝에 슬라이드 복제하기
	const slidePageFirst = slideList.firstElementChild.cloneNode(true);
	const slidePageLast = slideList.lastElementChild.cloneNode(true);
	slideList.appendChild(slidePageFirst);
	slideList.insertBefore(slidePageLast, slideList.firstElementChild);

	slideList.lastElementChild.classList.remove('active'); // 복제된 슬라이드로부터 따라온 active 제거

	// 페이지 로드되면 자동재생
	let setting; // clear를 위한 전역함수 선언

	function autoPlay() {
		setting = setInterval(() => {
			slideList.style.transition = '1s';
			slideList.style.transform = `translateX(-${slidePageWidth * (curIdx + 2)}%`;

			curPage.classList.remove('active'); // 지나간 슬라이드
			
			curIdx++;

			curPage = slidePage[curIdx];
			pageNum.textContent = curIdx + 1;
			state.style.width = `${33.3 * (curIdx + 1)}%`;

			if(curIdx === pageLen) {
				setTimeout(() => {
					slideList.style.transition = '0s';
					slideList.style.transform = `translateX(-${slidePageWidth}%`;
				},1001);
				curIdx = 0;
				curPage = slidePage[curIdx];
				pageNum.textContent = curIdx + 1;
				state.style.width = '100%';
			};

			curPage.classList.add('active');
		},4000);
	};

	document.addEventListener("DOMContentLoaded", () => {
		autoPlay();
	});

	// 다음 페이지로 이동
	function nextPage() {
		slideList.style.transition = '1s';
		slideList.style.transform = `translateX(-${slidePageWidth * (curIdx + 2)}%`;

		curPage.classList.remove('active'); // 지나간 슬라이드

		curIdx++;

		curPage = slidePage[curIdx];
		pageNum.textContent = curIdx + 1;
		state.style.width = `${33.3 * (curIdx + 1)}%`;

		if(curIdx === pageLen) {
			setTimeout(() => {
				slideList.style.transition = '0s';
				slideList.style.transform = `translateX(-${slidePageWidth}%`;
			},1001);
			curIdx = 0;
			curPage = slidePage[curIdx];
			pageNum.textContent = curIdx + 1;
			state.style.width = '100%';
		};

		curPage.classList.add('active');
	};

	// 이전 페이지로 이동
	function prevPage() {
		slideList.style.transition = '1s';
		slideList.style.transform = `translateX(-${slidePageWidth * curIdx}%`;

		curPage.classList.remove('active'); // 지나간 슬라이드

		curIdx--;

		curPage = slidePage[curIdx];
		pageNum.textContent = curIdx + 1;
		state.style.width = `${33.3 * (curIdx + 1)}%`;

		if(curIdx === -1) {
			setTimeout(() => {
				slideList.style.transition = '0s';
				slideList.style.transform = `translateX(-${slidePageWidth * pageLen}%`;
			},1001);
			curIdx = pageLen - 1;
			curPage = slidePage[curIdx];
			pageNum.textContent = curIdx + 1;
			state.style.width = '100%';
		};

		curPage.classList.add('active');
	};


