/* Operadores de igualdad Simple */

let valorA = "1";
let valorB = "1";

if (valorA === valorB) {
    console.log("El valor A es igual al Valor B");
} else {
    console.log("El valor A NOOO es igual al Valor B");
};

/* Condicional */

let edad = prompt("Ingrese su edad");

if (edad < 13) {
    alert("No puedes ingresar al after");
} else if ( edad >= 13 || edad <= 16 ) {
    alert("Puedes ingresar con un acompañante");
} else {
    alert("Puedes ingresar");
};