$(document).ready(function () {
  function load(){
    $.ajax({
      url: "https://andreihelo-restful-api.herokuapp.com/students",
      success: function(result, status, xhr){
        $.each(result, function(i){
          $("#contenido").append("<tr><td>"+result[i].id+"</td>"
          +"<td>"+result[i].name+"</td>"
          +"<td>"+result[i].last_name+"</td>"
          +"<td>"+result[i].registration_number+"</td>"
          +"<td>"+result[i].status+"</td></tr>");
        });
      }
    });
  }
  load();
  $("#agregar").click(function(){
    var nom = $("#nom").val();
    var ape = $("#ape").val();
    var mat = $("#mat").val();
    var estado = $("#estado").val();
    var estud = {"registration_number": mat,
                "name": nom,
                "last_name": ape,
                "status": estado};

                $.ajax({
                  url: "https://andreihelo-restful-api.herokuapp.com/students",
                  method: "POST",
                  data: estud,
                  success: function(result, status, xhr){
                      $("#contenido").append("<tr><td>"+result.id+"</td>"
                      +"<td>"+result.name+"</td>"
                      +"<td>"+result.last_name+"</td>"
                      +"<td>"+result.registration_number+"</td>"
                      +"<td>"+result.status+"</td></tr>");
                  }
                });
  });

  $("#modificar").click(function(){
    var id = $("#id").val();
    var nom = $("#nom").val();
    var ape = $("#ape").val();
    var mat = $("#mat").val();
    var estado = $("#estado").val();
    var estud = {"registration_number": mat,
                "name": nom,
                "last_name": ape,
                "status": estado
                };

                $.ajax({
                  url: "https://andreihelo-restful-api.herokuapp.com/students/"+id+"?_method=PUT",
                  method: "POST",
                  data: estud,
                  success: function(result, status, xhr){
                      $("#contenido").empty();
                      load();
                      }
                });
  });

  $("#eliminar").click(function(){
          var id = $("#id").val();
                  $.ajax({
                  url: "https://andreihelo-restful-api.herokuapp.com/students/"+id,
                  method: "POST",
                  data: {
                        "_method" : "DELETE"
                      },
                  success: function(result, status, xhr){
                    $("#contenido").empty();
                    load();
                    }
                  });
          });



  });
