
let myLeads = []

let buttonEl = document.getElementById('button-el')
let inputEl = document.getElementById('input-el')


buttonEl.addEventListener('click', function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})