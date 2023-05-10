


function hacerCafe(cantidadAgua, cantidadCafe, cantidadLeche, tipoCafe){
    /* console.log("Agregando " + cantidadAgua + "ml de agua");
    console.log("Agregando " + cantidadCafe + "gr de cafe");
    console.log("Agregando " + cantidadLeche + "ml de leche"); */

    return "Listo para disfrutar su cafe " + tipoCafe;
};

/* Cafe americano */
/* console.log(hacerCafe(100,50, 0)); */


/* console.log(hacerCafe(100, 100, 50, "Americano")); */

/* Quiero sacar cual es el 20% de 200 */
function sacarPorcentaje(porciento = 10, cantidadTotal = 200) {
    let result = porciento * cantidadTotal / 100;
    return  `El ${porciento} de ${cantidadTotal} es ${result}`;
}

console.log(sacarPorcentaje());