//Validação CPF 
export function validaCPF(input) {
  
    const cpfFormatado = input.value.replace(/\D/g, '');
    let mensagem = ''

    if(verificarNumeroRepetido(cpfFormatado) || !ehUmaEstruturaValida(cpfFormatado)){
        mensagem = 'CPF Inválido'
    }

    input.setCustomValidity(mensagem)
}

function verificarNumeroRepetido(cpf){
    const numerosRepeditos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfRepetido = false

    numerosRepeditos.forEach((valor) => {
        if(valor == cpf){
            cpfRepetido = true
        }
    })

    return cpfRepetido
}

function ehUmaEstruturaValida(cpf) {
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador){
    if (multiplicador >= 12) {
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0

    const cpfSemDigitos = cpf.substring(0, multiplicador - 1).split('')
    const digitosVericador = cpf.charAt(multiplicador - 1)
    
    for ( let i = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
        soma += cpfSemDigitos[i] * multiplicadorInicial 
        i++
    }

    if(digitosVericador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }
    
    return false 
}

function confirmaDigito(soma) {

    return (11 - (soma % 11)) == 11 ? 0 : 11 - (soma % 11)
}