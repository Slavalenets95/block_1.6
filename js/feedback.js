const feedBackCloseButton = document.querySelector('.feedback__close')
const feedBackOpenButton = document.querySelectorAll('.ui-button--message')
const feedBackArea = document.querySelector('.feedback')
const overlayArea = document.querySelector('.overlay')
const overlayHamburger = document.querySelector('.overlay-hamburger')
const hamburgerMenu = document.querySelector('.hamburger')
const ESC_KEYCODE = 27


function openFeedBack() {
    feedBackArea.classList.add('feedback--active')
    overlayHamburger.classList.add('overlay-hamburger--active')
    feedBackArea.focus()

    feedBackCloseButton.addEventListener('click', feedBackCloseButtonClickHandler)
    overlayHamburger.addEventListener('click', overlayFeedBackClickHandler)
    feedBackArea.addEventListener('keyup', escKeyDownHandler)

    feedBackOpenButton.forEach((item) => {
        item.removeEventListener('click', feedBackOpenButtonClickHandler)
    })
}

function closeFeedBack() {
    feedBackArea.classList.remove('feedback--active')
    overlayHamburger.classList.remove('overlay-hamburger--active')
    hamburgerMenu.focus()

    feedBackOpenButton.forEach((item) => {
        item.addEventListener('click', feedBackOpenButtonClickHandler)
    })
}


function feedBackOpenButtonClickHandler() {
    openFeedBack()
    
}

function feedBackCloseButtonClickHandler() {
    closeFeedBack()
    
}

function overlayFeedBackClickHandler() {
   closeFeedBack()
}

function feedBackCloseEscHandler(event) {
    if(event.keyCode === ESC_KEYCODE) {
        closeFeedBack()
    }
}

function escKeyDownHandler(event) {
    if(event.keyCode === ESC_KEYCODE) {
        closeFeedBack()
    }
}

feedBackOpenButton.forEach((item) => {
    item.addEventListener('click', feedBackOpenButtonClickHandler)
})
