
const overlay = document.querySelector('.overlay')
const items = document.querySelectorAll('.onboarding__item')
const button = document.querySelector('.button')

let i

button.addEventListener('click', () => {
    i = 0
    overlay.classList.remove('hide')
    items[i].style.zIndex = '10'
    items.forEach((item) => {
        item.style.cursor = 'pointer'
    })

})

items.forEach((item) =>
    item.addEventListener('click', () => {
        if (!overlay.classList.contains('hide')) {
            items[i].style.zIndex = '0';
            items[i].style.cursor = 'default'
            i++
        }
        if (i < 3) {
            items[i].style.zIndex = '10'
        }
        else {
            overlay.classList.add('hide')
        }
    }))