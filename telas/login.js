function validarCampos(){
    var email = document.getElementById('editTextTextEmailAddress')
    var senha = document.getElementById('editTextTextPassword')
        
        if (email == null || senha == null) {
            window.alert("Insira as informações faltantes")    
        }
}
