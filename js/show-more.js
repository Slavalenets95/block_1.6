let showMoreBtn = document.querySelectorAll('.show-more')
let readMore = document.querySelector('.read-more')
showMoreBtn.forEach((item) => {
    item.addEventListener('click', () => {
        item.previousElementSibling.classList.toggle('max-height-none')
        item.innerHTML == 'Показать всё' ? item.innerHTML = 'Скрыть' : item.innerHTML = 'Показать всё'
    })
})

readMore.addEventListener('click', (event) => {
    event.target.previousElementSibling.classList.toggle('max-height-none')
    event.target.innerHTML == 'Читать далее' ? event.target.innerHTML = 'Скрыть' : event.target.innerHTML = 'Читать далее'
})
