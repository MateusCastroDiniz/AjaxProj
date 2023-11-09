$(document).ready(()=>{
    
    $('#GithubCheckBox').change(() =>{
        if($('#GithubCheckBox').prop('checked')){
            $('#entryGithub').removeClass('d-none')
        }else{
            $('#entryGithub').addClass('d-none')
        }
    })

    $('#PostCheckBox').change(() =>{
        if($('#PostCheckBox').prop('checked')){
            $('#entryPost').removeClass('d-none')
        }else{
            $('#entryPost').addClass('d-none')
        }
    })
})