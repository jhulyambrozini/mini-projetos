const horasDiarias = document.querySelector('#horas-diarias')
const diasMes = document.querySelector('#dias-mes')
const despesas = document.querySelector('#despesas')
const equipamento = document.querySelector('#equipamento')

const resultado = document.querySelector('#valor-total')
const hidden = document.querySelector('#resultado')
const enviar = document.querySelector('#calcular')

const calcular = e => {
    e.preventDefault()

    if (horasDiarias.value == '' || diasMes.value == '' || despesas.value == '') {
        alert('Prencha os campos vazios')
    } else {
        let equipamentoMes = (Number(equipamento.value) / 12)
        let despesasTotais = Number(despesas.value) + equipamentoMes
        let horasMes = Number(horasDiarias.value) * Number(diasMes.value)

        const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2)

        hidden.classList.remove('hidden')
        resultado.innerText = `R$ ${valorHora}`
    }
}

enviar.addEventListener('click', calcular)



