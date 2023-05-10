let colores = ["blanco", "rojo", "negro"];
let peliculas = ["Volver al futuro", "Avatar", "Harry P"];

console.log(colores[2]);
console.log(peliculas[1]);

/* Podemos agregar un array dentro de otro */

let misArrays = [colores, peliculas];

console.log(misArrays[1][2]);

/* ver la long */

console.log("La variable pelicula tiene ", peliculas.length);

/* Agregar elementos en la ultima posc. */

colores.push("verde");
colores.push("azul");

/* Sacar el ultimo elemento */

colores.pop();
console.log(colores);

/* varios tipos de datos */

let varios = ["Dato", 1, true, null];

console.log(varios[3]);




