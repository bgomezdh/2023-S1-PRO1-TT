//Proxi = es como nuestro localhost no tiene un protocolo de seguridad, descrimina todos los sitios que no sean seguros
const proxy   = "https://api.allorigins.win/raw?url=";

/* este endpoint tiene las canciones, albumes y artistas */
let url = proxy + "https://api.deezer.com/chart"; 


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
       
        mostrarCanciones(data.tracks.data)
        mostrarAlbumes(data.albums.data)
        mostrarArtistas(data.artists.data)
 
    })
    .catch(function(error){
        console.log(error);
    })


function mostrarCanciones(misCanciones) {
    const cancionesSeccion = document.querySelector('#cancionesSeccion') 

    for (let i = 0; i < 5; i++) {
        cancionesSeccion.innerHTML += `<article>
                                            <img src="${misCanciones[i].album.cover}" alt="">
                                            <h4>${misCanciones[i].title}</h4>
                                            <p>${misCanciones[i].artist.name}</p>
                                            <a href="./detalleCancion.html">
                                                Ver +
                                            </a>
                                        </article>`            
    }
    
    return true;
}

function mostrarAlbumes(misAlbumes) {
    const albumesSeccion = document.querySelector('#albumesSeccion') 

    for (let i = 0; i < 5; i++) {
        albumesSeccion.innerHTML += `<article>
                                            <img src="${misAlbumes[i].cover}" alt="">
                                            <h4>${misAlbumes[i].title}</h4>
                                            <p>${misAlbumes[i].artist.name}</p>
                                            <a href="./detalleAlbum.html">
                                                Ver +
                                            </a>
                                        </article>`            
    }
    
    return true;
}

function mostrarArtistas(misArtistas) {
    console.log(misArtistas);
    const artistasSeccion = document.querySelector('#artistasSeccion') 

    for (let i = 0; i < 5; i++) {
        artistasSeccion.innerHTML += `<article>
                                            <img src="${misArtistas[i].picture}" alt="">
                                            <h4>${misArtistas[i].name}</h4>
                                            <a href="./detalleArtista.html">
                                                Ver +
                                            </a>
                                        </article>`            
    }
    
    return true;
}
