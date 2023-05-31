/* El ENDPOINT de la API */
let url ='https://randomuser.me/api/';

/* Caputando elementos del DOM */
let fotoPerfil = document.querySelector('.fotoPerfil');
let fotoPerfil2 = document.querySelector('.fotoPerfil2');
let nombre = document.querySelector('.nombre');


fetch(url)
.then(function(response) {
    /* tipo de dato: JSON */
    return response.json();
})
.then(function(data) {
    

    /* Tipo de dato: Obj literal o Array */
    console.log(data.results[0].name.first);
    fotoPerfil.src = data.results[0].picture.large;
    fotoPerfil2.src = data.results[0].picture.large;
    nombre.innerText = `${data.results[0].name.first},  ${data.results[0].name.last}` ;
})
.catch(function(error) {
    console.log(error);
});

