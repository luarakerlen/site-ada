document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if((document.getElementById("nome").value != "") && (document.getElementById("nome").value != "") && (document.getElementById("telefone").value != "")){
    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}