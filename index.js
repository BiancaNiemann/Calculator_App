const inputEl = document.getElementById('input')
const numberButtonEl = document.getElementsByClassName('numberButton')
const operatorButtonEl = document.getElementsByClassName('operatorButton')
const resetEl = document.getElementById('reset')
const totalEl = document.getElementById('total')
const equalsEl = document.getElementById('equals')
const deleteEl = document.getElementById('delete')
const dotEl = document.getElementsByClassName('dot')

let total = '0+'

inputEl.addEventListener('input', (e) => {
    return (
        console.log(e.target.value)
    )
})

function inputBarNumberValue() {
    for (let i = 0; i < numberButtonEl.length; i++) {
        numberButtonEl[i].addEventListener('click', (e) => {
            if (total === "0+") {
                if (e.target.value === '.') {
                    if (inputEl.value.includes('.')) {
                        alert('you need to enter a number')
                    } else {
                        inputEl.value += e.target.value
                    }
                } else {
                    inputEl.value += e.target.value
                }
            } else if (total !== "0+") {
                if (inputEl.value.length === 0) {
                    alert('you need to enter a operator')
                } else {
                    inputEl.value += e.target.value
                }
            }
        })
    }
}
inputBarNumberValue()

function inputBarOperatorSelected() {
    for (let i = 0; i < operatorButtonEl.length; i++) {
        operatorButtonEl[i].addEventListener('click', (e) => {
            if (inputEl.value[inputEl.value.length - 1] !== '+' && inputEl.value[inputEl.value.length - 1] !== '-' && inputEl.value[inputEl.value.length - 1] !== '*' && inputEl.value[inputEl.value.length - 1] !== '/') {
                if (e.target.value === '+' || e.target.value === '*' || e.target.value === '/') {
                    if ((inputEl.value).length === 0 && total === "0+") {
                        alert('you need to enter a number')
                    } else {
                        inputEl.value += e.target.value
                    }
                } else {
                    inputEl.value += e.target.value
                }
            } else {
                alert('you need to enter a number****')
            }
        })
    }
}
inputBarOperatorSelected()

function resetInputBar() {
    resetEl.addEventListener('click', () => {
        inputEl.value = ''
        totalEl.innerText = ''
        total = '0+'
    })
}
resetInputBar()

function addAllValues() {
    equalsEl.addEventListener('click', () => {
        total = total.concat(inputEl.value)
        total = eval(total)
        totalEl.innerText = total
        total = total.toString()
        inputEl.value = ''
    })
}
addAllValues()

function deleteLastInoutEntered() {
    deleteEl.addEventListener('click', () => {
        let oldInput = inputEl.value
        inputEl.value = oldInput.slice(0, -1)
    })
}
deleteLastInoutEntered()

function themeChoice(e) {

}

function dotClick() {
    for (let i = 0; i < dotEl.length; i++) {
        dotEl[i].addEventListener('click', (e) => {
            dotEl[i].classList.add('red-background')
            if (i === 0) {
                dotEl[1].classList.remove('red-background')
                dotEl[2].classList.remove('red-background')
                //Main Background
                document.getElementById('body').classList.remove('very-light-background')
                document.getElementById('body').classList.remove('dark-violet')
                document.getElementById('body').classList.add('dark-full-background')
                //Keypad
                document.getElementById('keypad').classList.remove('light-grey-background')
                document.getElementById('keypad').classList.remove('very-dark-violet')
                document.getElementById('keypad').classList.add('dark-main-background')
                //Header text
                document.getElementById('header').classList.remove('dark-blue-text')
                document.getElementById('header').classList.remove('light-yellow-text')
                document.getElementById('header').classList.add('white-text')
                //Toggle box
                document.getElementById('toggle').classList.remove('very-dark-violet')
                document.getElementById('toggle').classList.remove('light-grey-background')
                document.getElementById('toggle').classList.add('dark-toggle-input-background')
                //Input box
                document.getElementById('inputBox').classList.remove('very-dark-violet')
                document.getElementById('inputBox').classList.remove('white-background')
                document.getElementById('inputBox').classList.add('dark-toggle-input-background')
            }
            if (i === 1) {
                dotEl[0].classList.remove('red-background')
                dotEl[2].classList.remove('red-background')
                //Main Background
                document.getElementById('body').classList.remove('dark-full-background')
                document.getElementById('body').classList.remove('dark-violet')
                document.getElementById('body').classList.add('very-light-background')
                //Keypad
                document.getElementById('keypad').classList.remove('dark-main-background')
                document.getElementById('keypad').classList.remove('very-dark-violet')
                document.getElementById('keypad').classList.add('light-grey-background')
                //Header text
                document.getElementById('header').classList.remove('light-yellow-text')
                document.getElementById('header').classList.remove('white-text')
                document.getElementById('header').classList.add('dark-blue-text')
                //Toggle box
                document.getElementById('toggle').classList.remove('very-dark-violet')
                document.getElementById('toggle').classList.remove('dark-toggle-input-background')
                document.getElementById('toggle').classList.add('light-grey-background')
                //Input box
                document.getElementById('inputBox').classList.remove('very-dark-violet')
                document.getElementById('inputBox').classList.remove('dark-toggle-input-background')
                document.getElementById('inputBox').classList.add('white-background')
            }
            if (i === 2) {
                dotEl[0].classList.remove('red-background')
                dotEl[1].classList.remove('red-background')
                //Main Background
                document.getElementById('body').classList.remove('dark-full-background')
                document.getElementById('body').classList.remove('very-light-background')
                document.getElementById('body').classList.add('dark-violet')
                //Keypad
                document.getElementById('keypad').classList.remove('light-grey-background')
                document.getElementById('keypad').classList.remove('dark-main-background')
                document.getElementById('keypad').classList.add('very-dark-violet')
                //Header text
                document.getElementById('header').classList.remove('dark-blue-text')
                document.getElementById('header').classList.remove('white-text')
                document.getElementById('header').classList.add('light-yellow-text')
                //Toggle box
                document.getElementById('toggle').classList.remove('dark-toggle-input-background')
                document.getElementById('toggle').classList.remove('light-grey-background')
                document.getElementById('toggle').classList.add('very-dark-violet')
                //Input box
                document.getElementById('inputBox').classList.remove('dark-toggle-input-background')
                document.getElementById('inputBox').classList.remove('white-background')
                document.getElementById('inputBox').classList.add('very-dark-violet')
            }
        })
    }
}
dotClick()
