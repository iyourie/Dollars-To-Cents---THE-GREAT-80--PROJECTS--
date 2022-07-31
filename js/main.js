//variables (input and button)
let inp = document.querySelector('input')
let convert = document.querySelector('button')
//varibles (paragraphs)
let one = document.querySelectorAll('p')[0]
let two = document.querySelectorAll('p')[1]
let three = document.querySelectorAll('p')[2]
let four = document.querySelectorAll('p')[3]
let five = document.querySelectorAll('p')[4]
//the function to convert dh to rial and show its value and the rials
convert.addEventListener('click', () => {
    if (inp.value.length == 0) {
        alert('enter something bro :)')
    } else {
        one.innerHTML = `${inp.value} dh = ${inp.value * 20} Rial`;
    }
    let rials = inp.value * 20

    two.innerHTML = `${rials / 20} coins of 20 rial (1dh)`
    three.innerHTML = `${rials / 10} coins of 10 rial (0.5dh)`
    four.innerHTML = `${rials / 4} coins of 4 rial (0.20dh)`
    five.innerHTML = `${rials / 2} coins of 2 rial (0.10dh)`


    document.querySelectorAll('p').forEach(x => {
        x.classList.add('block')
    })
    document.querySelectorAll('h6').forEach(x => {
        x.classList.add('block')
    })
})