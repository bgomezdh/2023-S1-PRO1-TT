/* Recuperar los elementos */
/* Afectar a los elementos */

for(let i =0; i<15; i++){
    /* console.log('vuelta numero #' + i); */
    /* console.log(`vuelta numero #${i}`); */
};

let listaProfes = document.querySelector('.listaProfes');

let myArray = [1,2,3,4,5,6]

for (let i = 0; i < myArray.length; i++) {
    listaProfes.innerHTML += `<li> Profe numero ${myArray[i]}</li>`
}