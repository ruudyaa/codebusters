const btnOff = document.querySelector('.js-modal-scrolloff');
const btnOn = document.querySelector('.js-modal-scrollon');
const body = document.body;

function disableScroll() {
    body.classList.add('disable-scroll');
}

function enableScroll() {
    body.classList.remove('disable-scroll');
}

btnOff.addEventListener('click', (e) => {
    enableScroll()
    e.currentTarget.style.pointerEvents = 'none';
    btnOn.style.pointerEvents = 'auto'
}) 

btnOn.addEventListener('click', (e) => {
    disableScroll()
    e.currentTarget.style.pointerEvents = 'none';
    btnOff.style.pointerEvents = 'auto'
}) 
    
