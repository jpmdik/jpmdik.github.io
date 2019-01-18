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
  });
});