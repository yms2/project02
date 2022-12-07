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


const nav = document.querySelector('ul.gnb')
const navList = document.querySelector('.lnb_inner')

nav.addEventListener('mouseover',()=>{
	navList.style.display = 'block'
	navList.style.display = 'flex'
})
nav.addEventListener('mouseout',() =>{
    navList.style.display = 'none'
})

// main
// function Slider(target) {
//     // 상태
//     let index = 1;
//     let isMoved = true;
//     const speed = 2000; // ms
  
//     // 방향
//     const transform = "transform " + speed / 2000 + "s" ;
//     let translate = (i) => "translateX(-" + 100 * i + "%)";

//       // 슬라이더
//     const slider = document.querySelector(target);
//     const sliderRects = slider.getClientRects()[0];
//     slider.style["overflow"] = "hidden";

//       // 슬라이더 화면 컨테이너
//     const container = document.createElement("div");
//     container.style["display"] = "flex";
//     container.style["width"] = sliderRects.width + "px";
//     container.style["height"] = sliderRects.height + "px";
//     container.style["transform"] = translate(index);

//     let boxes = [].slice.call(slider.children);
//     boxes = [].concat(boxes[boxes.length - 1], boxes, boxes[0]);
  
//     // 슬라이더 화면 스타일
//     const size = boxes.length;
//     for (let i = 0; i < size; i++) {
//       const box = boxes[i];
//       container.appendChild(box.cloneNode(true));
//     }
  
//     // 처음/마지막 화면 눈속임 이벤트
//     container.addEventListener("transitionstart", function () {
//       isMoved = false;
//       setTimeout(() => {
//         isMoved = true;
//       }, speed);
//     });
//     container.addEventListener("transitionend", function () {
//       // 처음으로 순간이동
//       if (index === size - 1) {
//         index = 1;
//         container.style["transition"] = "none";
//         container.style["transform"] = translate(index);
//       }
//       // 끝으로 순간이동
//       if (index === 0) {
//         index = size - 2;
//         container.style["transition"] = "none";
//         container.style["transform"] = translate(index);
//       }
//     });
  
//     // 슬라이더 붙이기
//     slider.innerHTML = "";
//     slider.appendChild(container);
  
//     return {
//       move: function (i) {
//         if (isMoved === true) {
//           index = i;
//           container.style["transition"] = transform;
//           container.style["transform"] = translate(index);
//         }
//       },
//       next: function () {
//         if (isMoved === true) {
//           index = (index + 1) % size;
//           container.style["transition"] = transform;
//           container.style["transform"] = translate(index);
//         }
//       },
//       prev: function () {
//         if (isMoved === true) {
//           index = index === 0 ? index + size : index;
//           index = (index - 1) % size;
//           container.style["transition"] = transform;
//           container.style["transform"] = translate(index);
//         }
//       }
//     };
//   }
  
//   const s1 = new Slider("#slider1", "H");
  
//   setInterval(() => {
//     s1.next();
//   }, 3000)

