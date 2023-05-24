/* bajar la info de localStorage */
let peliculasFavLocal = localStorage.getItem('peliculas');
let resultadoLocal = JSON.parse(peliculasFavLocal);

let lista = document.querySelector('#listaDesordenada');

for (let i = 0; i < resultadoLocal.length; i++) {
    lista.innerHTML += `<li>Pelicula: ${resultadoLocal[i].titulo} y es  ${resultadoLocal[i].genero}</li>`;    
}

localStorage.clear();
