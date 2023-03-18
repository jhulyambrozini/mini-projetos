
const keys = document.querySelectorAll('.key')

const playNote = (event) => {

    // pegando código da tecla
    let audioKeyCode = getKeyCode(event)

    // verificando se a tecla existe
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)
    if (!key) return

    playAudio(audioKeyCode)

}

const getKeyCode = (event) => {

    let keyCode;

    const isKeyboard = event.type === 'keydown'
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

const playAudio = (audioKeyCode) => {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}
// click com o mouse
keys.forEach((key) => {
    key.addEventListener('click', playNote)
})
// click com o teclado
window.addEventListener('keydown', playNote)