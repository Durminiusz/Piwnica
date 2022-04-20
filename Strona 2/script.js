let glasses = document.getElementsByClassName('szklo');
let cards = document.getElementsByClassName('card');
let curtain = document.getElementsByClassName('curtain');
let arrow = document.getElementsByClassName('arrow');
for(let i = 0; i < glasses.length; i++){
    glasses[i].addEventListener('click', () => {
        for(let j = 0; j < cards.length; j++){
            cards[j].classList.remove('go-in');
            cards[j].classList.add('go-out');
        }
        curtain[i].classList.remove('jump-out');
        curtain[i].classList.add('jump-in');    
    })

    arrow[i].addEventListener('click', () => {
        curtain[i].classList.add('jump-out');
        for(let j = 0; j < cards.length; j++){
            cards[j].classList.add('go-in');
            cards[j].classList.remove('go-out');
        }
        // curtain[0].style.position = 'absolute';
        // curtain[0].style.top = 0;
        // curtain[0].style.left = 0;
        // curtain[0].style.animation = "wyjazd 2s forwards";
    })
}
// Roller
cards[2].addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('video').volume = 0.5;
        document.querySelector('video').muted = !document.querySelector('video').muted;    
    }, 1000);
    
})
arrow[2].addEventListener('click', () => {
    document.querySelector('video').muted = !document.querySelector('video').muted
})
