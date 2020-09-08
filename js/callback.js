const callBackCloseButton = document.querySelector('.callback__close')
const callBackOpenButton = document.querySelectorAll('.ui-button--phone')
const callBackArea = document.querySelector('.callback')
const overlayArea = document.querySelector('.overlay')
const overlayHamburger = document.querySelector('.overlay-hamburger')
const hamburgerMenu = document.querySelector('.hamburger')
const ESC_KEYCODE = 27


function openCallBack() {
    callBackArea.classList.add('callback--active')
    overlayHamburger.classList.add('overlay-hamburger--active')
    callBackArea.focus()
    

    callBackCloseButton.addEventListener('click', callbackCloseButtonClickHandler)
    overlayHamburger.addEventListener('click', overlayCallbackClickHandler)
    callBackArea.addEventListener('keyup', escKeyDownHandler)

    callBackOpenButton.forEach((item) => {
        item.removeEventListener('click', callbackOpenButtonClickHandler)
    })
}

function closeCallBack() {
    callBackArea.classList.remove('callback--active')
    overlayHamburger.classList.remove('overlay-hamburger--active')
    hamburgerMenu.focus()

    callBackOpenButton.forEach((item) => {
        item.addEventListener('click', callbackOpenButtonClickHandler)
    })
}


function callbackOpenButtonClickHandler() {
    openCallBack()
}

function callbackCloseButtonClickHandler() {
    closeCallBack()
}

function overlayCallbackClickHandler(event) {
    closeCallBack()
}

function escKeyDownHandler(event) {
    if(event.keyCode === ESC_KEYCODE) {
        closeCallBack()
    }
}


callBackOpenButton.forEach((item) => {
    item.addEventListener('click', callbackOpenButtonClickHandler)
})
