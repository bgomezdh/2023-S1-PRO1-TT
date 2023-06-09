let queryString = location.search; //Obtengo la QS
let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
let idpersonaje = queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get()


let url = `https://rickandmortyapi.com/api/character/${idpersonaje}`

console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Capturamos DOM
        let title = document.querySelector('h1');
        let imagen = document.querySelector('img');
        let status = document.querySelector('.status');
        let species = document.querySelector('.species');
        let gender = document.querySelector('.gender');

        title.innerText = "Detalle sobre: " +  data.name;
        imagen.src=data.image;
        status.innerText += data.status;
        species.innerText += data.species;
        gender.innerText += data.gender;

        
    })
    .catch(function(error){
        console.log(error);
    })


/*                      Guardar en favorito                         */

/* Crear un array vacio para luego ser completado con lo que trae localStorage */
let favoritos = [];

/* Recuperar localStorage de la key "favoritos" */
let recuperoStorage = localStorage.getItem('favoritos');

/* Preguntar si es distinto de nulo para ver si tiene info */
if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
}

/* Recurperar el elemento del DOM */
let fav = document.querySelector('#fav');

/* preguntar si el array favoritos incluye este ID - si lo incluye cambiar el texto a quitar de favoritos*/

if (favoritos.includes(idpersonaje)) {
    fav.innerText = 'Quitar de Favoritos'
}

/* agregar el evento click a el boton de Fav - preguntar si el array de favoritos inlcuye el ID del personaje

TRUE = si clickeo el btn y existe quiero eliminarlo y cambiar el texto del btn
FALSE = si clickeo el btn y NOO existe quiero pushearlo y cambiar el texto del btn

Pasar FAVORITOS a JSON y subirlos a localStorage
*/

fav.addEventListener('click', function() {
    if (favoritos.includes(idpersonaje)) {
        let indice = favoritos.indexOf(idpersonaje)
        favoritos.splice(indice, 1);
        fav.innerText = 'Agregar a favorito'
    } else {
        favoritos.push(idpersonaje);
        fav.innerText = 'Quitar de favorito'
    }

    let favoritosToString =JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosToString )
} )


