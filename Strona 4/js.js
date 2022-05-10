let click=document.getElementsByClassName('click');
let card=document.getElementsByClassName('karta');
let block=document.getElementsByClassName('block');
let klik=document.getElementsByClassName('clock');
for(let i = 0; i < card.length; i++){

    block[i].addEventListener('click', () => {

        /*
        for(let j = 0; j < cards.length; j++){
            cards[j].classList.remove('go-in');
            cards[j].classList.add('go-out');
        }
        */
       
        karta[i].classList.remove('jump-out');
        karta[i].classList.add('jump-in');    
    })



}