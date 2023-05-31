let provincias = 'https://apis.datos.gob.ar/georef/api/provincias';
let listaProvincias = document.querySelector('.listaProvincias');

fetch(provincias)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let contenido = "";

    for (let i = 0; i < data.provincias.length; i++) {
        console.log(data.provincias[i].nombre);
        contenido += `<li> 
                        <a href="./provincias/${data.provincias[i].id}">
                        ${data.provincias[i].nombre}
                        </a>  
                    </li>`
    }

    listaProvincias.innerHTML = contenido
})
.catch(function(error) {
    console.log(error);
});

