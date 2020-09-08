const readMoreButton = document.querySelector('.read-more')


function showMore() {
    readMoreButton.previousElementSibling.classList.add('max-height-none')
    readMoreButton.innerHTML = 'Скрыть'
    readMoreButton.addEventListener('click', closeMoreButtonCLickHandler)
    readMoreButton.removeEventListener('click', showMoreButtonCLickHandler)
}

function closeMore() {
    readMoreButton.previousElementSibling.classList.remove('max-height-none')
    readMoreButton.innerHTML = 'Читать далее'
    readMoreButton.addEventListener('click', showMoreButtonCLickHandler)
    readMoreButton.removeEventListener('click', closeMoreButtonCLickHandler)
}

function showMoreButtonCLickHandler() {
    showMore()
}

function closeMoreButtonCLickHandler() {
    closeMore()
}

readMoreButton.addEventListener('click', showMoreButtonCLickHandler)