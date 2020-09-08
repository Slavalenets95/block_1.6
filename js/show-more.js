const showMoreButton = document.querySelectorAll('.show-more')


function showMore(event) {
    event.target.previousElementSibling.classList.add('max-height-none')
    event.target.innerHTML = 'Скрыть'

    event.target.addEventListener('click', closeMoreButtonClickHandler)
    event.target.removeEventListener('click', showMoreButtonCLickHandler)
}

function closeMore(event) {
    event.target.previousElementSibling.classList.remove('max-height-none')
    event.target.innerHTML = 'Показать всё'

    event.target.addEventListener('click', showMoreButtonCLickHandler)
    event.target.removeEventListener('click', closeMoreButtonClickHandler)
}


function showMoreButtonCLickHandler(event) {
    showMore(event)
}

function closeMoreButtonClickHandler(event) {
    closeMore(event)
}



showMoreButton.forEach((item) => {
    item.addEventListener('click', showMoreButtonCLickHandler)
})

