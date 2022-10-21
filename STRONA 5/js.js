const intro = document.getElementsByClassName('enter')[0];
const intro2 = document.getElementsByClassName('main')[0];
const intro3 = document.getElementsByClassName('mainslajd')[0];
const intro4 = document.getElementsByClassName('mainslajd')[0];

const introButton = intro.getElementsByTagName('button')[0];

introButton.addEventListener('click', () => {
    intro.classList.add('wyjscie');
    intro2.classList.add('wyjscie');
})

const one = intro2.getElementsByTagName('button')[0];

one.addEventListener('click', () => {

    intro3.classList.add('wjazd');
    
})

const ibutton = intro3.getElementsByTagName('button')[0];

ibutton.addEventListener('click', () => {

    intro4.classList.add('wyjazd');

})
