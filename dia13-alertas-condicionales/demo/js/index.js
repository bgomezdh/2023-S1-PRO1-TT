/* el alert() */

alert("Hola desde la terminal");

/* prompt() */
let respuesta = prompt("Cual es tu nombre?");
console.log(respuesta);

/* confirm() */
let confirmacion = confirm(`Hola ${respuesta}, quieres continuar?`);

alert("La respuesta del usuario fue: " + confirmacion);


