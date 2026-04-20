// const textName = document.querySelector('#text')
// textName.innerHTML = `<b>Assalomu alaykum</b>`
// textName.textContent =  `<b>Assalomu alaykum</b>`
// textName.innerHTML = 'Assalomu alaykum'


const link = document.querySelector('a')
console.log(link.getAttribute('href'))
link.setAttribute('href','https://www.yandex.uz')
link.textContent = 'Go To Yandex main page'


const textOne = document.querySelector('#title-one')
const textTwo = document.querySelector('#title-two')

textOne.setAttribute('class', 'success')
textTwo.setAttribute('class', 'error')