const { call } = require("file-loader")

const buttonClose = document.querySelectorAll('.ui-button--close')
const callBackBtn = document.querySelectorAll('.ui-button--phone')
const feedBackBtn = document.querySelectorAll('.ui-button--message')
const callBackArea = document.querySelector('.callback')
const feedBackArea = document.querySelector('.feedback')
const overlayArea = document.querySelector('.overlay')





callBackBtn.forEach((item) => {
    item.addEventListener('click', () => {
        callBackArea.style.display = 'block'
        overlay.classList.toggle('overlay--active')
    })
})

feedBackBtn.forEach((item) => {
    item.addEventListener('click', () => {
        feedBackArea.style.display = 'block'
        overlay.classList.toggle('overlay--active')
    })
})

buttonClose.forEach((item) => {
    item.addEventListener('click', () => {
        item.parentElement.style.display = 'none'
        overlay.classList.toggle('overlay--active')
    })
})