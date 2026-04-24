const inputUsuario = document.getElementById('gmail')
const inputSenha =document.getElementById('senha')
const botaoLogar = document.getElementById('logar')

const usuarioADM = "admin"
const senhaADM = "admin"

botaoLogar.addEventListener('click', () => {

    let campoUsuario = inputSenha.value
    let campoSenha = inputSenha.value

    if(campoUsuario.trim() == "" || campoSenha.trim() != usuarioADM){
        //alert("O CAMPO USUARIO ESTA VAZIO!!!")
        let estiloAntigo = inputUsuario.style

        inputUsuario.style = "border: red 2px solid; background-color: #ffc0ba; transition: all 0.5s ease"
        
        
        setTimeout(() => {
            inputUsuario.style = estiloAntigo
        }, 3000);
    }

    if(campoSenha.trim() == "" || campoSenha.trim() != senhaADM){
        //alert(O CAMPO SENHA ESTA VAZIO!!!)
        let estiloAntigo = inputSenha.style

        inputSenha.style = "border: red 2px solid; background-color: #ffb9b3; transition: all 0.5s ease"
        
        
        setTimeout(() => {
            inputSenha.style = estiloAntigo
        }, 3000);

    } 

    if(campoUsuario == usuarioADM && campoSenha == senhaADM){

        window.location.href = '/user.html'
    }

    

})
 
