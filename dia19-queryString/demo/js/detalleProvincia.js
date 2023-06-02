let qs = location.search;
let qsObj = new URLSearchParams(qs);

let id = qsObj.get('id');

let url = "https://apis.datos.gob.ar/georef/api/provincias?id="+ id;

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let prov = document.querySelector('#prov');

    prov.innerText = data.provincias[0].nombre
})
.catch(function(error) {
    console.log(error);
});

