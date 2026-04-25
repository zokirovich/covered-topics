// add remove
const paraText = document.querySelector('p')
paraText.classList.add('success')
paraText.classList.remove('error')


// mashqcha 
// content ichida success va error so`z bo`ladi shu so`z bo`lgan qatorga success va error classlarini ishlatish lozim

const textClass  = document.querySelectorAll('p')
// console.log(textClass)
textClass.forEach((text) => {
  //  console.log(text);
  if (text.textContent.includes('error')) {
		text.classList.add('error')
	}
	 if (text.textContent.includes('success')) {
		text.classList.add('successd')
	}
})	