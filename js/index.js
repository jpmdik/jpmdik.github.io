URL_API = "https://convite-form.herokuapp.com"

$( document ).ready(function() {
  $('#user').keyup(function(e){
    if(e.keyCode == 13)
    {
      $("#code").focus();
    }
  });
  
  $('#code').keyup(function(e){
    if(e.keyCode == 13)
    {
      $("#confirmar").trigger("click");
    }
  });
  
  $("#confirmar").click(function() {
    $("#corpo").addClass("d-none");
    $("#loading").removeClass("d-none");
    
    dados = Object();
    dados.username = 'ola';
    dados.voucher = '123'

    var result = "";

    $.ajax({
      url: URL_API + "/confirmar",
      method: 'POST',
      dataType: 'json',
      data: dados,
      async: false,
      crossDomain: true,
      success: function(data, status, xhr){
        result = data;
        alert(result);
      },
      error: function (request, status, error) {
        result = "";
      }
    });
  });
});