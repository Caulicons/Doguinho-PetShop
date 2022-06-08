import { verificadorIdade } from "./validandoNascimento.js"
import { validaCPF } from "./validandoCPF.js"
import { validaCEP } from "./validandoCEP.js"

//manipulando inputs segundo sua seleção.
export function valida(input) {
    const tipoDeInput = input.dataset.form
     
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    console.log(input.validity);
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido') 
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = alterandoMensagemDeErro(tipoDeInput, input)
    }
}

const validadores = {
    dataNascimento : input => verificadorIdade(input),
    cpf : input => validaCPF(input),
    cep : input => validaCEP(input)
}

//Tratando e alterando os erros
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio."
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: "O email digitado não é valido"
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        patternMismatch: "A senha deve conte entre 6 a 12 caracteres , pelo menos uma letra maiúscula, uma minuscula, e um número. Não deve conte nenhum carácter especial"
    },
    dataNascimento: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    cpf: {
        valueMissing: "O campo de cpf não pode estar vazio.",
        customError: 'CPF Inválido'
    },
    cep : {
        valueMissing: "O campo de CEP não pode estar vazio.",
        customError: 'Não é possível Buscar o CEP',
        patternMismatch: 'CEP Incompleto'
    },
    preco : {
        valueMissing: "O campo de preco não pode estar vazio.",
    }
}

function alterandoMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
   
     tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}


