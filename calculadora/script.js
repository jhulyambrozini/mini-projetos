const result = document.querySelector('.result')
const operation = document.querySelector('.operation')
const clean = document.querySelector('.clean')
const cleanAll = document.querySelector('.clean-all')

// clean display
cleanAll.addEventListener('click', () => {
    result.innerText = '0'
    operation.innerText = ''
})

// clean caracteres
clean.addEventListener('click', () => {
    operation.innerText = operation.innerText.substring(0, operation.innerText.length - 1)
})

// função de fazer operação
const calculation = () => {
    if (result) {
        calc = eval(operation.innerText)
        console.log(isNaN(calc), result)
        if(isNaN(calc) || calc == undefined) {
            return result.innerText = "Sintaxe error"
         } else {
            result.innerText = calc
         }
    }

    
}
// exibir operação no display
const insert = (elem) => {
    operation.innerText += elem
    return operation
}
