let btn = document.querySelector('.dropDown-btn')
let dropDownContainer = document.querySelector('.dropDown')

btn.addEventListener('click', () => {
    dropDownContainer.classList.toggle('display')
    btn.classList.toggle('rotate')
})