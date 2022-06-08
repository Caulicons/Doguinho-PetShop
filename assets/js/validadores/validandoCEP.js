export function validaCEP(input) {
    const cep = input.value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(!input.validity.patternMismatch && !input.validity.valueMissing){
        fetch(url)
        .then((fistRes) => fistRes.json())
        .then((res) => {
            if(res.erro) {
                input.setCustomValidity('Não é possível Buscar o CEP')
                return
            } else {
                document.querySelector('[data-end="logradouro"]').value = res.logradouro
                document.querySelector('[data-end="cidade"]').value = res.localidade
                document.querySelector('[data-end="estado"]').value = res.uf 

                input.setCustomValidity('')
            }
    })
        
    }
}
