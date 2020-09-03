let hamburger = document.querySelector('.hamburger')
let hamburgerClose = document.querySelector('.ui-button--hamburger-close')
let hamburgerOpen = document.querySelector('.ui-button--hamburger-open')
let overlay = document.querySelector('.overlay')
hamburgerOpen.addEventListener('click', () => {
    hamburger.style.display = 'block'
    overlay.classList.toggle('overlay--active')
})

hamburgerClose.addEventListener('click', () => {
    hamburger.style.display = 'none'
    overlay.classList.toggle('overlay--active')
})

overlay.addEventListener('click', () => {
    if(innerWidth >= 768 && innerWidth <= 1366) {
        hamburger.style.display = 'none'
        overlay.classList.toggle('overlay--active')
    }
})
