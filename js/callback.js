const callBackButtonClose = document.querySelector('.callback__close')
const callBackButtonOpen = document.querySelectorAll('.ui-button--phone')
const callBackArea = document.querySelector('.callback')
const overlayArea = document.querySelector('.overlay')
const overlayHamburger = document.querySelector('.overlay-hamburger')
const hamburger = document.querySelector('.hamburger')



function openCallBack() {
    callBackArea.classList.add('callback--active')
    callBackArea.focus()
}

function closeCallBack() {
    callBackArea.classList.remove('callback--active')
}

function overlay() {
    if(hamburger.classList.contains('hamburger--active')) {
        overlayHamburger.classList.toggle('overlay-hamburger--active')
    } else {
        overlayArea.classList.toggle('overlay--active')
    }
}

function callbackOpenButtonClickHandler() {
    openCallBack()
    overlay()
}

function callbackCloseButtonClickHandler() {
    closeCallBack()
    overlay()
}

function overlayCallbackClickHandler() {
    if(overlayHamburger.classList.contains('overlay-hamburger--active') && callBackArea.classList.contains('callback--active')) {
        overlayHamburger.classList.toggle('overlay-hamburger--active')
        closeCallBack()
    } else if(overlayArea.classList.contains('overlay--active') && callBackArea.classList.contains('callback--active')) {
        overlayArea.classList.toggle('overlay--active')
        closeCallBack()
    }
}

function callbackCloseEscHandler(event) {
    if(event.keyCode === 27 && callBackArea.classList.contains('callback--active')) {
        closeCallBack()
        overlay()
    }
}




callBackButtonOpen.forEach((item) => {
    item.addEventListener('click', callbackOpenButtonClickHandler)
})
callBackButtonClose.addEventListener('click', callbackCloseButtonClickHandler)
overlayHamburger.addEventListener('click', overlayCallbackClickHandler)
overlayArea.addEventListener('click', overlayCallbackClickHandler)
callBackArea.addEventListener('keyup', callbackCloseEscHandler)