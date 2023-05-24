/* crear la info */
let peliculasFav = [
    { id: 1, titulo: "Cars 2", genero: "Animados"},
    { id: 2, titulo: "Titanic", genero: "Drama"},
    { id: 3, titulo: "Volver al Fut", genero: "Acción"}
]

/* Transformar elemento info a string */
let peliculasFavToString = JSON.stringify(peliculasFav);

/* subir info a localStorage */
localStorage.setItem('peliculas', peliculasFavToString);
