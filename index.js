const inputEl = document.getElementById('input')
const numberButtonEl = document.getElementsByClassName('numberButton')
const operatorButtonEl = document.getElementsByClassName('operatorButton')
const resetEl = document.getElementById('reset')
const totalEl = document.getElementById('total')
const equalsEl = document.getElementById('equals')
const deleteEl = document.getElementById('delete')

let total = '0+'

inputEl.addEventListener('input', (e) => {
    return (
        console.log(e.target.value)
    )
})

function inputBarNumberValue(){
    for (let i = 0; i < numberButtonEl.length; i++) {
        numberButtonEl[i].addEventListener('click', (e) => {
            if(e.target.value === '.'){
                if(inputEl.value[inputEl.value.length - 1] !== '.'){
                    inputEl.value += e.target.value
                } else {
                    alert('you can only have one decimal place')
                }
            } else {
            inputEl.value += e.target.value
            }
        })
    }
}
inputBarNumberValue()

function inputBarOperatorSelected(){
    for (let i = 0; i < operatorButtonEl.length; i++) {
        operatorButtonEl[i].addEventListener('click', (e) => {
            inputEl.value += e.target.value
        })
    }
}
inputBarOperatorSelected()

function resetInputBar(){
    resetEl.addEventListener('click', () => {
        inputEl.value = ''
        totalEl.innerText = ''
        total = '0+'
    })
}
resetInputBar()

function addAllValues(){
    equalsEl.addEventListener( 'click' , ()=> {
        total = total.concat(inputEl.value)
        total = eval(total)
        totalEl.innerText = total
        total = total.toString()
        inputEl.value = ''
    })
}
addAllValues()

function deleteLastInoutEntered(){
    deleteEl.addEventListener( 'click', () =>{
        let oldInput = inputEl.value
        inputEl.value = oldInput.slice(0, -1)
    })
}
deleteLastInoutEntered()
    



