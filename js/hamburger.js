const hamburgerMenu = document.querySelector('.hamburger')
const hamburgerCloseButton = document.querySelector('.ui-button--hamburger-close')
const hamburgerOpenButton = document.querySelector('.ui-button--hamburger-open')
const overlayArea = document.querySelector('.overlay')
const ESC_KEYCODE = 27



function openHamburger() {
    hamburgerMenu.classList.add('hamburger--active')
    overlayArea.classList.add('overlay--active')
    hamburgerMenu.focus()

    hamburgerCloseButton.addEventListener('click', hamburgerCloseButtonClickHandler)
    overlayArea.addEventListener('click', overlayAreaClickHandler)
    hamburgerMenu.addEventListener('keyup', escapeKeyDownHandler)

    hamburgerOpenButton.removeEventListener('click', hamburgerOpenButtonClickHandler)

}

function closeHamburger() {
    hamburgerMenu.classList.remove('hamburger--active')
    overlayArea.classList.remove('overlay--active')

    hamburgerOpenButton.addEventListener('click', hamburgerOpenButtonClickHandler)

    hamburgerCloseButton.removeEventListener('click', hamburgerCloseButtonClickHandler)
    overlayArea.removeEventListener('click', overlayAreaClickHandler)
    hamburgerMenu.removeEventListener('keyup', escapeKeyDownHandler)

}



function hamburgerOpenButtonClickHandler() {
    openHamburger()
}

function hamburgerCloseButtonClickHandler() {
    closeHamburger()
}

function overlayAreaClickHandler() {
        closeHamburger()
}

function escapeKeyDownHandler(event) {
    if(event.keyCode === ESC_KEYCODE) {
        closeHamburger()
    }
}


hamburgerOpenButton.addEventListener('click', hamburgerOpenButtonClickHandler)



 