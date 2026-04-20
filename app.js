// const textName = document.querySelector('#text')
// textName.innerHTML = `<b>Assalomu alaykum</b>`
// textName.textContent =  `<b>Assalomu alaykum</b>`
// textName.innerHTML = 'Assalomu alaykum'


const link = document.querySelector('a')
console.log(link.getAttribute('href'))
link.setAttribute('href','https://www.yandex.uz')
link.textContent = 'Go To Yandex main page'


const textPoragrof = document.querySelector('p')
textPoragrof.setAttribute('class','success')
