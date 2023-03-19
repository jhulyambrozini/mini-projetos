function meuEscopo() {

    const form = document.querySelector('.form')

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('evento previnido')

        let peso = e.target.querySelector('.peso');
        let altura = e.target.querySelector('.altura');

        peso = Number(peso.value);
        altura = Number(altura.value);

        if (!peso || !altura) {
            setResultado('Digite apenas números', false);
            return
        }

        const imc = getIMC(peso, altura)
        const nivelImc = getNivelImc(imc)

        const msg = `Seu IMC é ${imc} (${nivelImc}).`
        setResultado(msg, true)
    });

    function getNivelImc (imc){
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    // calculo do imc
    function getIMC(peso, altura) {
        const imc = peso / (altura * altura)
        return imc.toFixed(2)
    }

    // criando um elemento p
    function criaP() {
        const p = document.createElement('p');
        return p
    }

    // adicionando p dentro da div resultado
    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = ''; // zerando o html

        const p = criaP()

        // adicionando as flags de backgound
        if (isValid) {
            p.classList.add('sucess')
        } else {
            p.classList.add('fail')
        }
        p.innerHTML = msg;
        resultado.appendChild(p) // adiciona p dentro da div
    }
}

meuEscopo();