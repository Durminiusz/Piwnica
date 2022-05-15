// let click=document.getElementsByClassName('click');
// let card=document.getElementsByClassName('karta');
// let block=document.getElementsByClassName('block');
// let klik=document.getElementsByClassName('clock');
// for(let i = 0; i < card.length; i++){

//     block[i].addEventListener('click', () => {

//         /*
//         for(let j = 0; j < cards.length; j++){
//             cards[j].classList.remove('go-in');
//             cards[j].classList.add('go-out');
//         }
//         */
       
//         karta[i].classList.remove('jump-out');
//         karta[i].classList.add('jump-in');    
//     })



// }
// Cards/Slides indexes, colors, ids
let baseCardZindex = 99;
let activeSlideIndex = 0;
const cards = document.getElementsByClassName('card');
for(let i = 0; i < cards.length; i++){
    cards[i].setAttribute("id", `slide-${i}`);
    cards[i].style.zIndex = baseCardZindex-i;
    cards[i].style.color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}

// Intro, buttons event
const intro = document.getElementsByClassName('intro')[0];

const introButton = intro.getElementsByTagName('button')[0];
introButton.addEventListener('click', () => {
    intro.classList.add('intro-out');
})
// Slide Change
let mouse = {
    x:0,
    y:0,
};
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})
const slideBox = document.getElementById('slides');
const sidebar = document.getElementById('side-bar');
const sidebarItems = sidebar.getElementsByTagName('div');
slideBox.addEventListener('click', () => {

    if(mouse.y > window.innerHeight/2 && activeSlideIndex < cards.length - 1){
        // Next slide go upwards
        clearCard(document.getElementById(`slide-${activeSlideIndex}`));
        document.getElementById(`slide-${activeSlideIndex}`).classList.add('throw-active-up-slide');
        activeSlideIndex++;
        clearCard(document.getElementById(`slide-${activeSlideIndex}`));
        document.getElementById(`slide-${activeSlideIndex}`).classList.add('throw-down-active-slide');

    }else if(mouse.y <= window.innerHeight/2 && activeSlideIndex > 0){{
        // Previous Slide go downwards
        clearCard(document.getElementById(`slide-${activeSlideIndex}`));
        document.getElementById(`slide-${activeSlideIndex}`).classList.add('throw-active-down-slide');
        activeSlideIndex--;
        clearCard(document.getElementById(`slide-${activeSlideIndex}`));
        document.getElementById(`slide-${activeSlideIndex}`).classList.add('throw-up-active-slide');

        }
    }else{
        alert("Słońce wstało, miesiąc maj.\nMati mówi, Aga daj.\nAga mówi, Mati bierz.\nSłońce zaszło, Aga też.");
    }
    for(let i = 0; i < sidebarItems.length; i++)
        sidebarItems[i].classList.remove('active-slide');
    sidebarItems[activeSlideIndex].classList.add('active-slide');
})
let clearCard = (cardHandler) => {
    // throw-active-up-slide
    // throw-up-active-slide
    // throw-active-down-slide
    // throw-down-active-slide
    cardHandler.classList.remove('throw-active-up-slide');
    cardHandler.classList.remove('throw-up-active-slide');
    cardHandler.classList.remove('throw-active-down-slide');
    cardHandler.classList.remove('throw-down-active-slide');
}





