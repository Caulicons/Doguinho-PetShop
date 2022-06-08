//Validação data de Nascimento
export function verificadorIdade(inputData) {

    const dataRecebida = new Date(inputData.value)
    let mensagem = ''

   if (!éMais18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    inputData.setCustomValidity(mensagem)
}

function éMais18(data) {

    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

   return dataMais18 <= dataAtual
}