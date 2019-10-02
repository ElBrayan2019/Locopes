var buscador = $("#table").DataTable();

$("#busqueda").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#busqueda").val() == ""){
        $(".contenedor-busqueda").fadeOut(300);
    }else{
        $(".contenedor-busqueda").fadeIn(300);
    }
})