import { valida } from "./validadores/tratamentoDeErros.js"
import { mask } from "./validadores/mascaras.js"

const inputs = document.querySelectorAll('input')

inputs.forEach((input) => {
    const tipoDeInput = input.dataset.form

    if (tipoDeInput === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })

    if(mask[tipoDeInput]){
        input.addEventListener('input', (evento) => {     
                evento.target.value = mask[tipoDeInput](evento.target.value)
        })
    }
    
})


//Deixando cabeçalho responsivo para telas menores.
/* document.querySelector('.cabecalho')
.addEventListener('click', () => {
    
    document.querySelector('.cabecalho__logo').classList.toggle('cabecalho__logo--alternativo')
    document.querySelector('.cabecalho').classList.toggle('cabecalho--alternativo')
    document.querySelector('.cabecalho__lista-navegacao').classList.toggle('cabecalho__lista-navegacao--alternativo')
})
 */