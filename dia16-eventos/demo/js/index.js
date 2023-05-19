let btnSeguir   = document.querySelector('.btn');
let btnMode     = document.querySelector('.btn-mode');
let body        = document.querySelector('body');

btnSeguir.addEventListener('click', function(e) {
    /* la acci´ón que quiero que haga */
    this.innerText = "Seguido";
    this.style.background = '#fff';
    this.style.color = '#000';
});


btnMode.addEventListener('click', function(e) {
  
   
    if (btnMode.innerText == 'Modo Oscuro') {
        body.style.background = '#313131';
        this.innerText = 'Modo Claro';
    } else {
        body.style.background = '#fff';
        this.innerText = 'Modo Oscuro';
    }
})