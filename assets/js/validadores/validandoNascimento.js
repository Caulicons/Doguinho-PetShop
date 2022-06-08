//Validação data de Nascimento
export function verificadorIdade(inputData) {

    const dataRecebida = new Date(inputData.value)
    let mensagem = ''

   if (!éMais18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

   if(éUmaDataValida(dataRecebida)){
        mensagem = 'Você está de parabéns ser consegue mexer no computador nessa idade.'
    }
 
    inputData.setCustomValidity(mensagem)
}

function éMais18(data) {

    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

   return dataMais18 <= dataAtual
}

function éUmaDataValida(data) {

    const dataAtual = new Date()
    const dataInvalida = new Date(dataAtual.getUTCFullYear() - 100, dataAtual.getUTCMonth(), dataAtual.getUTCDate())

    return dataInvalida <= data
} 