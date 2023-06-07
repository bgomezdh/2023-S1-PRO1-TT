const busqueda  = document.querySelector('#busqueda');
const btn       = document.querySelector('#btn');
const formNombre  = document.querySelector('.form');

/* busqueda.addEventListener('focus' , function(){

    alert('Entro al campo');
}); */

/* busqueda.addEventListener('blur' , function(){

    alert('Salio al campo');
}); */

/* busqueda.addEventListener('input' , function(){

   if (busqueda.value.length >= 3) {
    btn.style.background = 'green';
    btn.style.color = '#fff';
   } 
}); */

formNombre.addEventListener('submit' , function(e) {
    /* Inicio bloque de codigo para el this.*/
    e.preventDefault();

    if (busqueda.value == '') {
        /* si es vacio quiero que envie un alert */
        
        alert('No puedes enviar el campo vacio')
    } else {
        this.submit();
    }

 /* Fin bloque de codigo para el this. */   
})

