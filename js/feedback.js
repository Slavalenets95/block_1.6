const feedBackButtonClose = document.querySelector('.feedback__close')
const feedBackButtonOpen = document.querySelectorAll('.ui-button--message')
const feedBackArea = document.querySelector('.feedback')
const overlayArea = document.querySelector('.overlay')
const overlayHamburger = document.querySelector('.overlay-hamburger')
const hamburger = document.querySelector('.hamburger')



function openFeedBack() {
    feedBackArea.classList.add('feedback--active')
    feedBackArea.focus()
}

function closeFeedBack() {
    feedBackArea.classList.remove('feedback--active')
}

function overlay() {
    if(hamburger.classList.contains('hamburger--active')) {
        overlayHamburger.classList.toggle('overlay-hamburger--active')
    } else {
        overlayArea.classList.toggle('overlay--active')
    }
}

function feedbackOpenButtonClickHandler() {
    openFeedBack()
    overlay()
}

function feedbackCloseButtonClickHandler() {
    closeFeedBack()
    overlay()
}

function overlayFeedbackClickHandler() {
    if(overlayHamburger.classList.contains('overlay-hamburger--active') && feedBackArea.classList.contains('feedback--active')) {
        overlayHamburger.classList.toggle('overlay-hamburger--active')
        closeFeedBack()
    } else if(overlayArea.classList.contains('overlay--active') && feedBackArea.classList.contains('feedback--active')) {
        overlayArea.classList.toggle('overlay--active')
        closeFeedBack()
    }
}

function feedbackCloseEscHandler(event) {
    if(event.keyCode === 27 && feedBackArea.classList.contains('feedback--active')) {
        closeFeedBack()
        overlay()
    }
}


feedBackButtonOpen.forEach((item) => {
    item.addEventListener('click', feedbackOpenButtonClickHandler)
})
feedBackButtonClose.addEventListener('click', feedbackCloseButtonClickHandler)
overlayHamburger.addEventListener('click', overlayFeedbackClickHandler)
overlayArea.addEventListener('click', overlayFeedbackClickHandler)
feedBackArea.addEventListener('keyup', feedbackCloseEscHandler)