const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0;
let timer;

function iniciarTime() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getTimeSeconds(segundos)
    }, 1000)
}

document.addEventListener('click', function (e) {
    const element = e.target

    if (element.classList.contains('iniciar')) {
        relogio.style.color = '#06E02E'
        relogio.classList.remove('relogio-piscar')
        clearInterval(timer)
        iniciarTime()
    }
    if (element.classList.contains('pausar')) {
        relogio.style.color = '#000'
        relogio.classList.add('relogio-piscar')
        relogio.style.color = '#FA1B00'
        clearInterval(timer)
    }
    if (element.classList.contains('zerar')) {
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('relogio-piscar')
        relogio.style.color = '#000'
        clearInterval(timer)
        segundos = 0;
    }
})