

function validaCampos(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario != "red" && senha != "123456"){
        alert("Usuario ou senha invalidos")
    }else{
        alert("Seja bem-vindo ", usuario);
    }
}