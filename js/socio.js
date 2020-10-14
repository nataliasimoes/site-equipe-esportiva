
function valida_form (){
    if(document.getElementById("nome").value == ""){
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
    }
}

function valida_form (){
    if(document.getElementById("exampleInputEmail1").value == ""){
        alert('Por favor, preencha o campo email');
        document.getElementById("exampleInputEmail1").focus();
        return false
    }
}

function valida_form (){
    if(document.getElementById("exampleInputPassword1").value == ""){
        alert('Por favor, preencha o campo senha');
        document.getElementById("exampleInputPassword1").focus();
        return false
    }
}

$(function () {
    $('[data-toggle="popover"]').popover()
  })
  

  $('#meuModal').on('shown.bs.modal', function () {
    $('#meuInput').trigger('focus')
  })