const hamburger = document.querySelector('.hamburger')
const hamburgerClose = document.querySelector('.ui-button--hamburger-close')
const hamburgerOpen = document.querySelector('.ui-button--hamburger-open')
const overlayArea = document.querySelector('.overlay')



function openHamburger() {
    hamburger.classList.add('hamburger--active')
}

function closeHamburger() {
    hamburger.classList.remove('hamburger--active')
}

function overlay() {
    overlayArea.classList.toggle('overlay--active')
}

function hamburgerOpenButtonClickHandler() {
    openHamburger()
    overlay()
}

function hamburgerCloseButtonClickHandler() {
    closeHamburger()
    overlay()
}

function overlayAreaClickHandler() {
    if(hamburger.classList.contains('hamburger--active')) {
        closeHamburger()
        overlay()
    }
}

function hamburgerCloseEscHandler(event) {
    if(event.keyCode === 27 && hamburger.classList.contains('hamburger--active')) {
        closeHamburger()
        overlay()
    }
}


hamburgerOpen.addEventListener('click', hamburgerOpenButtonClickHandler)
hamburgerClose.addEventListener('click', hamburgerCloseButtonClickHandler)
overlayArea.addEventListener('click', overlayAreaClickHandler)
window.addEventListener('keyup', hamburgerCloseEscHandler)




