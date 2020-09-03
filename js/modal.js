const { call } = require("file-loader")

let buttonClose = document.querySelectorAll('.ui-button--close')
let callBackBtn = document.querySelectorAll('.ui-button--phone')
let feedBackBtn = document.querySelectorAll('.ui-button--message')
let callBackArea = document.querySelector('.callback')
let feedBackArea = document.querySelector('.feedback')
let overlay = document.querySelector('.overlay')
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