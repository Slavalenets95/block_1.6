let showMoreBtn = document.querySelectorAll('.show-more')
showMoreBtn.forEach((item) => {
    item.addEventListener('click', () => {
        item.previousElementSibling.classList.toggle('max-height-none')
        item.innerHTML == 'Показать всё' ? item.innerHTML = 'Скрыть' : item.innerHTML = 'Показать всё'
    })
})