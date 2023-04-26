const inputEl = document.getElementById('input')
const numberButtonEl = document.getElementsByClassName('numberButton')
const calcButtonEl = document.getElementsByClassName('calcButton')
const resetEl = document.getElementById('reset')
const totalEl = document.getElementById('total')
const equalsEl = document.getElementById('equals')

inputEl.addEventListener('input', (e) => {
    return (
        console.log(e.target.value)
    )
})

function inputBarValue(){
    for (let i = 0; i < numberButtonEl.length; i++) {
        numberButtonEl[i].addEventListener('click', (e) => {
            inputEl.value += e.target.value
        })
    }
}
inputBarValue()

function resetInputBar(){
    resetEl.addEventListener('click', () => {
        inputEl.value = ''
        totalEl.innerText = ''
    })
}
resetInputBar()

function addAllValues(){
    equalsEl.addEventListener( 'click' , ()=> {
        totalEl.innerText = eval(inputEl.value)
    })
}
addAllValues()

    



