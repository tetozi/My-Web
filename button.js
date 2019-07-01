//const textArea = document.getElementById('text')
const numberOfText = document.getElementById('number')
const submit = document.getElementById('submit')
const name = document.getElementById("name")

submit.addEventListener('click', showText);




function showText() {
    const p = document.createElement('p')
    let pParent = document.getElementById('text')
    p = document.createTextNode(number[`blah blah ${name.value}`])
    pParent.appendChild(p)
}