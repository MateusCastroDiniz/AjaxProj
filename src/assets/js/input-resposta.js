$(document).ready(() => {

    const urlUsers = 'https://api.github.com/users'
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
    const mainPerfil = $('#carrosel-perfil')
    const mainPosts = $('#carrosel-posts')
    let perfis = ''
    let posts = ''

    const getUser = (user) =>{
    
    fetch(`${urlUsers}/${user}`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            if(mainPerfil.find(data.name).text()){
                mainPerfil.trigger('add.owl.carousel', [$(''), 0]).trigger('refresh.owl.carousel');
            }else{
        mainPerfil.trigger('add.owl.carousel', [$("<div class='item'><div class='card'><div class='card-body'><div class='card-title'>" + data.name + "</div><p class='card-text'>Repositórios públicos: " + data.public_repos + "</p><p class='card-text'>Nome de usuário: "+ data.login +"</p></div></div></div>"), 0]).trigger('refresh.owl.carousel');
            }

        })
        .catch((error) => {
            console.error( 'erro: ', error.message || error)
        })
    }
    
    const getPost = (idPost) => {
    fetch(`${urlPosts}/${idPost}`,{
        method: 'GET',
        headers:{
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => {

            if(mainPosts.find(data.title).text()){
                mainPosts.trigger('add.owl.carousel', [$(''), 0]).trigger('refresh.owl.carousel');
            }else{
        mainPosts.trigger('add.owl.carousel', [$("<div class='item'><div class='card'><div class='card-body'><div class='card-title'>" + data.title + "</div><p class='card-text'>Repositórios públicos: " + data.body + "</p></div></div></div>"), 0]).trigger('refresh.owl.carousel');
            }
        })
    }
    
  $('#inputGithub').on('focusout', ()=>{
    getUser($('#inputGithub').val())
  })
    
  $('#inputPost').on('focusout', ()=>{
    getPost($('#inputPost').val())
  })

})
    
    
    
    