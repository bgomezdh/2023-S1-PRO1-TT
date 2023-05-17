const container = document.querySelector('.container');

let usuarios = [
    {
        sexo: "Masculino",
        numero: "11335656",
        email: "brian@gmail.com",
        nombre: "Brian"
    },
    {
        sexo: "Feme",
        numero: "12312123",
        email: "anto@gmail.com",
        nombre: "Anto"
    },
    {
        sexo: "Luis",
        numero: "4564566",
        email: "luis@gmail.com",
        nombre: "Luis"
    }
]

for (let i = 0; i < usuarios.length; i++) {
    container.innerHTML += `<div class="card">
                                <div class="card-header">
                                <a href="/detalleArtista.html?idDelCantante=26">
                                    <img class="fotoPerfil" alt="rover" src="./img/perfil.jpg" />
                                </a>
                                </div>
                                <div class="card-body">
                                <span class="tag tag-teal sexo">${usuarios[i].sexo}</span>
                                <h4 class="telefono">${usuarios[i].numero}</h4>
                                <p class="email">${usuarios[i].email}</p>
                                
                                <div class="user">
                                    <img class="fotoPerfil2" alt="user"  src="./img/perfil.jpg"/>
                                    <div class="user-info">
                                    <h5 class="nombre">${usuarios[i].nombre}</h5>
                                    <small id="date">1996-07-14</small>
                                    </div>
                                </div>
                                <ul class="lista">
                                    <li class="listItem">Primer Item</li>
                                    <li class="listItem">Segundo Item</li>
                                </ul>
                                </div>
                            </div>`;
}