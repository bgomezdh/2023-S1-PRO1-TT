let form = document.querySelector('.form');
let input = document.querySelector('#busqueda');

form.addEventListener('submit', function(e) {
    e.preventDefault()

    if (input.value.length > 0) {
       form.submit();
    } else {
        alert("Debes escribir por lo menos un caracter");
    }
});

input.addEventListener('keydown', function(e) {
    console.log(input.value);
})