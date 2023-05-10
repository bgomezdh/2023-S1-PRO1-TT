let misDatos = {
    nombre: "Brian" ,
    apellido: "Gomez",
    edad: 30,
    dni: 34534545,
    comidasFavoritas: ["Milanesa", "Pizza", "Pan"],
    saludar: function() {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primera comida Fav es ${this.comidasFavoritas[0]} `;
    }
};

console.log(misDatos.saludar());
