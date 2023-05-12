/* Recuperar los elementos */
let fotoPerfil  = document.querySelector('.fotoPerfil');
let sexo        = document.querySelector('.sexo');
let fotoPerfil2 = document.querySelector('.fotoPerfil2');
let lista       = document.querySelectorAll('.listItem');
let mail        = document.querySelector('.email');
let date        = document.querySelector('#date');


/* Afectar a los elementos */
fotoPerfil.src      = './img/brian.jpeg';
sexo.innerText      = 'Masculino';
fotoPerfil2.src     = './img/brian.jpeg';
mail.innerHTML      = '<em>brian@gmail.com</em>';
date.innerText      = '1993-12-03';
date.style.fontWeight = 'bolder';
date.style.color      = '#000';
lista[0].style.backgroundColor = 'blue';
lista[1].style.backgroundColor = 'green';


