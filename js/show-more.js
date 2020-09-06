const showMoreBtn = document.querySelectorAll('.show-more')
const readMoreBtn = document.querySelector('.read-more')



function showMoreButtonCLickHandler() {
    this.previousElementSibling.classList.toggle('max-height-none')
    this.innerHTML === 'Показать всё' ? this.innerHTML = 'Скрыть' : this.innerHTML = 'Показать всё'
}

function readMoreButtonClickHandler() {
    this.previousElementSibling.classList.toggle('max-height-none')
    this.innerHTML === 'Читать далее' ? this.innerHTML = 'Скрыть' : this.innerHTML = 'Читать далее'
}


showMoreBtn.forEach((item) => {
    item.addEventListener('click', showMoreButtonCLickHandler)
})

readMoreBtn.addEventListener('click', readMoreButtonClickHandler)
