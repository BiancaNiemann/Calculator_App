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

function dotClick() {
    for (let i = 0; i < dotEl.length; i++) {
        dotEl[i].addEventListener('click', (e) => {
            if (i === 0) {
                dotEl[1].classList.remove('orange-background')
                dotEl[2].classList.remove('cyan-background')
                dotEl[0].classList.add('red-background')
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
                //input amount text
                inputEl.classList.remove('dark-blue-text')
                inputEl.classList.remove('light-yellow-text')
                inputEl.classList.add('white-text')    
                //Total amount text
                totalEl.classList.remove('dark-blue-text')
                totalEl.classList.remove('light-yellow-text')
                totalEl.classList.add('white-text')              
                //Toggle box
                document.getElementById('toggle').classList.remove('very-dark-violet')
                document.getElementById('toggle').classList.remove('light-grey-background')
                document.getElementById('toggle').classList.add('dark-toggle-input-background')
                //Input box
                document.getElementById('inputBox').classList.remove('very-dark-violet')
                document.getElementById('inputBox').classList.remove('white-background')
                document.getElementById('inputBox').classList.add('dark-toggle-input-background')
                //Equals key
                equalsEl.classList.remove('orange-key-background')
                equalsEl.classList.remove('cyan-key-background')
                equalsEl.classList.add('red-background')
                //Reset key
                resetEl.classList.remove('blue-key-background')
                resetEl.classList.remove('purple-key-background')
                resetEl.classList.add('red-background')
                //Delete key
                deleteEl.classList.remove('blue-key-background')
                deleteEl.classList.remove('purple-key-background')
                deleteEl.classList.add('red-background')
                //Number keys
                for(let i = 0; i < numberButtonEl.length; i++){
                    numberButtonEl[i].classList.remove('grey-yellow-key-background' , 'dark-grey-yellow-text')
                    numberButtonEl[i].classList.remove('very-dark-purple-key-background' , 'light-yellow-text')
                    numberButtonEl[i].classList.add('grey-orange-background' ,'dark-grey-blue-text')
                }
                //Operator keys
                for(let i = 0; i < operatorButtonEl.length; i++){
                    operatorButtonEl[i].classList.remove('grey-yellow-key-background' , 'dark-grey-yellow-text')
                    operatorButtonEl[i].classList.remove('very-dark-purple-key-background' , 'light-yellow-text')
                    operatorButtonEl[i].classList.add('grey-orange-background' ,'dark-grey-blue-text')
                }
            }
            if (i === 1) {
                dotEl[1].classList.add('orange-background')
                dotEl[2].classList.remove('cyan-background')
                dotEl[0].classList.remove('red-background')
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
                //input amount text
                inputEl.classList.add('dark-blue-text')
                inputEl.classList.remove('light-yellow-text')
                inputEl.classList.remove('white-text')    
                //Total amount text
                totalEl.classList.add('dark-blue-text')
                totalEl.classList.remove('light-yellow-text')
                totalEl.classList.remove('white-text')  
                //Toggle box
                document.getElementById('toggle').classList.remove('very-dark-violet')
                document.getElementById('toggle').classList.remove('dark-toggle-input-background')
                document.getElementById('toggle').classList.add('light-grey-background')
                //Input box
                document.getElementById('inputBox').classList.remove('very-dark-violet')
                document.getElementById('inputBox').classList.remove('dark-toggle-input-background')
                document.getElementById('inputBox').classList.add('white-background')
                //Equals key
                equalsEl.classList.add('orange-key-background')
                equalsEl.classList.remove('cyan-key-background')
                equalsEl.classList.remove('red-background')
                //Reset key
                resetEl.classList.add('blue-key-background')
                resetEl.classList.remove('purple-key-background')
                resetEl.classList.remove('red-background')
                //Delete key
                deleteEl.classList.add('blue-key-background')
                deleteEl.classList.remove('purple-key-background')
                deleteEl.classList.remove('red-background')
                //Number keys
                for(let i = 0; i < numberButtonEl.length; i++){
                    numberButtonEl[i].classList.add('grey-yellow-key-background' , 'dark-grey-yellow-text')
                    numberButtonEl[i].classList.remove('very-dark-purple-key-background' , 'light-yellow-text')
                    numberButtonEl[i].classList.remove('grey-orange-background' ,'dark-grey-blue-text')
                }
                //Operator keys
                for(let i = 0; i < operatorButtonEl.length; i++){
                    operatorButtonEl[i].classList.add('grey-yellow-key-background' , 'dark-grey-yellow-text')
                    operatorButtonEl[i].classList.remove('very-dark-purple-key-background' , 'light-yellow-text')
                    operatorButtonEl[i].classList.remove('grey-orange-background' ,'dark-grey-blue-text')
                }
            }
            if (i === 2) {
                dotEl[1].classList.remove('orange-background')
                dotEl[2].classList.add('cyan-background')
                dotEl[0].classList.remove( 'red-background')
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
                //input amount text
                inputEl.classList.remove('dark-blue-text')
                inputEl.classList.add('light-yellow-text')
                inputEl.classList.remove('white-text')    
                //Total amount text
                totalEl.classList.remove('dark-blue-text')
                totalEl.classList.add('light-yellow-text')
                totalEl.classList.remove('white-text')  
                //Toggle box
                document.getElementById('toggle').classList.remove('dark-toggle-input-background')
                document.getElementById('toggle').classList.remove('light-grey-background')
                document.getElementById('toggle').classList.add('very-dark-violet')
                //Input box
                document.getElementById('inputBox').classList.remove('dark-toggle-input-background')
                document.getElementById('inputBox').classList.remove('white-background')
                document.getElementById('inputBox').classList.add('very-dark-violet')
                //Equals key
                equalsEl.classList.remove('orange-key-background')
                equalsEl.classList.add('cyan-key-background')
                equalsEl.classList.remove('red-background')
                //Reset key
                resetEl.classList.remove('blue-key-background')
                resetEl.classList.add('purple-key-background')
                resetEl.classList.remove('red-background')
                //Delete key
                deleteEl.classList.remove('blue-key-background')
                deleteEl.classList.add('purple-key-background')
                deleteEl.classList.remove('red-background')
                //Number keys
                for(let i = 0; i < numberButtonEl.length; i++){
                    numberButtonEl[i].classList.remove('grey-yellow-key-background' , 'dark-grey-yellow-text')
                    numberButtonEl[i].classList.add('very-dark-purple-key-background' , 'light-yellow-text')
                    numberButtonEl[i].classList.remove('grey-orange-background' ,'dark-grey-blue-text')
                }
                //Operator keys
                for(let i = 0; i < operatorButtonEl.length; i++){
                    operatorButtonEl[i].classList.remove('grey-yellow-key-background' , 'dark-grey-yellow-text')
                    operatorButtonEl[i].classList.add('very-dark-purple-key-background' , 'light-yellow-text')
                    operatorButtonEl[i].classList.remove('grey-orange-background' ,'dark-grey-blue-text')
                }
            }
        })
    }
}
dotClick()
