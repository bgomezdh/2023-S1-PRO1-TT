/* Objetos Literales */

let persona = {
   nombre: "Luis",        /* Las propiedades */
   apellido: "Navas",     /* Las propiedades */
   edad: 29,                /* Las propiedades */
   saludar: function(otroNombre) {
        return "Hola "+  otroNombre+ ", mi nombre es "+ this.nombre +" " + this.apellido;
   }
}

let respuesta = persona.saludar("Antonella");

console.log(respuesta);


/* ObjLit en Array */

let profesores = [ {
    nombre: "brian",
    apellido: "Gomez",
    materia: "Pro2"
} ,{
    nombre: "Luis",
    apellido: "Navas",
    materia: "Pro1"
} ,{
    nombre: "Miguel",
    apellido: "Granados",
    materia: "Pro3"
} ];

console.log(profesores[1].apellido);