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
    
    dados = new Object();
    dados.username = $("#user").val();
    dados.voucher = $("#code").val();

    $.ajax({
      url: URL_API + "/confirmar",
      method: 'POST',
      data: JSON.stringify(dados),
      dataType: 'json',
      contentType: 'application/json;charset=UTF-8',
      crossDomain: true,
      success: function(data, status, xhr){
        result = data;
        if(result.success == false){
          $("#corpo").removeClass("d-none");
          $("#loading").addClass("d-none");
          $("#alert").html(result.msg);
          $("#alert").removeClass("d-none");
        }
        else if(result.success == true){
          $("#frase").html("\""+result.msg.frase+"\"");
          $("#autor").html("<i><b>"+result.msg.autor+"</b></i>");
          $("#descricao").html(result.msg.descricao);
          $("#data-missa").html("<b>Data: </b>"+result.msg['data-missa']);
          $("#local-missa").html("<b>Local: </b>"+result.msg['local-missa']);
          $("#data-formatura").html("<b>Data: </b>"+result.msg['data-formatura']);
          $("#local-formatura").html("<b>Local: </b>"+result.msg['local-formatura']);
          $("#loading").addClass("d-none");
          $("#confirmacao").removeClass("d-none");
        }
      },
      error: function (request, status, error) {
        result = "";
      }
    });
  });
});