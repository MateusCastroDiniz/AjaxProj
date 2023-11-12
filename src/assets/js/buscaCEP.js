// function updateAdress(data) {
//     if (!('erro' in data)) {
//         if((data.bairro) == $('#input-bairro').val()){
//             $('#resultado-CEP').text((data.cep))
//         }else{
//             $('#resultado-CEP').text('CEP não encontrado1')
//         }

//     }else{
//         $('#resultado-CEP').text('CEP não encontrado2')
//     }
// }

// $('#buscar-CEP').on('click', () => {


//     const script = document.createElement('script');


//     script.src = 'https://viacep.com.br/ws/' + $('#input-estado').val() + '/' + $('#input-cidade').val() + '/' + $('#input-rua').val() + '/json?callback=updateAdress';
//     document.body.appendChild(script)

//     console.log($('#input-estado').val() + ' ' + $('#input-cidade').val() + ' ' + $('#input-rua').val())


// })























































$(document).ready(() => {

    const ApiCorreios = 'https://viacep.com.br/ws'
    


    const getCEP = (caminho) =>{


    $('#resultado-alerta').text('')
    
    fetch(`${ApiCorreios}/${caminho}`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((datas) => {
         

            if (!('erro' in datas)) {
                
                datas.forEach((data) =>{

                    if(data.bairro == $('#input-bairro').val()){
                        $('#resultado-CEP').text((data.cep))
                        $('#resultado-alerta').text('')
                    }else{
                        console.log('')
                    }
                })
            }else{
                $('#resultado-alerta').text('Cep não encontrado, verifique os dados preenchidos')
            }
            
        })
        .catch((error) => {
            console.error( 'erro: ', error.message || error)
        })
    }
    
    $('#buscar-CEP').on('click', ()=>{
      getCEP($('#input-estado').val() + '/' + $('#input-cidade').val() + '/' + $('#input-rua').val() + '/json')
    })

})
    
    
    
    