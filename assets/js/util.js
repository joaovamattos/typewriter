//---typeWriter---
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i ) => {
        setTimeout( () => { elemento.innerHTML += letra; }, 75 * i)
    });
    setTimeout(function() { 
        const paragrafo = document.querySelector('p');
        paragrafo.style.opacity = '1';
    }, 3000)
}

const titulo = document.querySelector('h1');
typeWrite(titulo);



//---carousel---
const carouselSlide = document.querySelector('.carousel-slide')
const carouselItems = document.querySelectorAll('.carousel-item')

//Buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

//Counter
let counter = 1
let size = carouselItems[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button Listener
nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselItems.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'   
})

prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'   
})

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselItems[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none'
        counter = carouselItems.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'   
    }
    if (carouselItems[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none'
        counter = carouselItems.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'   
    }
})

const resize = item => {
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
size = carouselItems[0].clientWidth
    item.style.width = '100%'
}

document.body.onresize = function() {
    carouselItems.forEach(resize)
};