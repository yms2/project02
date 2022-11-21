const lang = document.querySelector(".header_util > .lang > a");
const langBox = document.querySelector('.lang_box');

lang.addEventListener('mouseover',()=>{
    langBox.style.display = 'block'
})
lang.addEventListener('mouseout',() =>{
    langBox.style.display = 'none'
})

