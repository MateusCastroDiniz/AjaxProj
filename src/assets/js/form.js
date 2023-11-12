$(document).ready(()=>{
const form = document.getElementById('form')
const nome = document.getElementById('input-nome')
const email = document.getElementById('input-email')
const cep = document.getElementById('input-cep')
const cpf = document.getElementById('input-cpf')
const mensagem = document.getElementById('mensagem')
const notNull = document.getElementsByClassName('notNull')


const IsEmpty = (elem) => {
    elem.value.length < 1 ? document.getElementById(`mensagem-${elem.name}`).innerHTML = `O campo <strong>${elem.name}</strong> não pode ficar vazio` : document.getElementById(`mensagem-${elem.name}`).innerHTML = ''

    let condicao = elem.value.length < 1 ? true : false
    return condicao

}

const validaEmail = (elem) => {
    !elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? document.getElementById(`mensagem-${elem.name}`).innerHTML = `Insira um email válido` : document.getElementById(`mensagem-${elem.name}`).innerHTML = ''
    
    let condicao = elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false
    return condicao
}

const validaTEL = (elem) => {
    !elem.value.match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/) ? document.getElementById(`mensagem-${elem.name}`).innerHTML = `Insira um número de telefone válido` : document.getElementById(`mensagem-${elem.name}`).innerHTML = ''
    
    let condicao = elem.value.match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/) ? true : false
    return condicao
}

const validaCEP = (elem) => {
    !elem.value.match(/\d{5}-\d{3}/) ? document.getElementById(`mensagem-${elem.name}`).innerHTML = `Insira um CEP válido` : document.getElementById(`mensagem-${elem.name}`).innerHTML = ''

    let condicao = elem.value.match(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/) ? true : false
    return condicao
}

const validaCPF = (elem) => {
    !elem.value.match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/) ? document.getElementById(`mensagem-${elem.name}`).innerHTML = `Insira um CPF válido` : document.getElementById(`mensagem-${elem.name}`).innerHTML = ''
    
    let condicao = elem.value.match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/) ? true : false
    return condicao 
}



$('#enviarForm').on('click', (event) => {
    event.preventDefault();
    event.stopPropagation()

    Array.from(notNull).map(field => {
        
        if(IsEmpty(field)){
           return false 
        }else{
            form.submit()
        }
    })

})


document.querySelectorAll('input').forEach(field => {
    field.addEventListener('focusout', (e) => {
        e.preventDefault()

        if (!IsEmpty(field)) {
            if (field.name == 'email') {
                validaEmail(field)
            }
            if (field.name == 'cpf') {
                validaCPF(field)
            }

            if (field.name == 'cep') {
                validaCEP(field)
            }

            if (field.name == 'tel') {
                validaTEL(field)
            }
        }

    })
})



})

