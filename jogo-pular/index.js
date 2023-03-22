const resetar = document.querySelector('.reiniciar')
const personagem = document.querySelector('.personagem')
const obstaculo = document.querySelector('.obstaculo')

const jump = () => {
    personagem.classList.add('jump')

    setTimeout(() => {
    personagem.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const obstaculoPosicao = obstaculo.offsetLeft
    const personagemPosicao = +window.getComputedStyle(personagem).bottom.replace('px', '')

    if(obstaculoPosicao <= 60 && obstaculoPosicao > 0 && personagemPosicao < 80) {
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosicao}px`

        personagem.style.animation = 'none'
        personagem.style.left = `${personagemPosicao}px`
        personagem.src = './assets/game-over.png'
        personagem.style.width = '50px'

        clearInterval(loop)
    } 
}, 10)


document.addEventListener('keydown', jump)
resetar.addEventListener('click', () => {
    window.location.reload()
})
