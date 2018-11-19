//invocamos al objeto (window) y a su método (scroll), solo se ejecutara si el usuario hace scroll en la página
$(window).scroll(function(){
  if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
    $("#js_up").slideDown(600); //se muestra el botón en 300 mili segundos
  }else{ // si no
    $("#js_up").slideUp(600); //se oculta el botón en 300 mili segundos
  }
});

//creamos una función accediendo a la etiqueta i en su evento click
$("#js_up i").on('click', function (e) { 
  e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
  $("body,html").animate({ // aplicamos la función animate a los tags body y html
    scrollTop: 0 //al colocar el valor 0 a scrollTop me volverá a la parte inicial de la página
  },1400); //el valor 700 indica que lo ara en 700 mili segundos
  return false; //rompe el bucle
});
