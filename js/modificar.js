const URL = "http://localhost:4000"

const queryString = window.location.search; // Obtener la query string de la URL
const urlParams = new URLSearchParams(queryString); // Obtener los parámetros de la query string

const id = urlParams.get('codigo'); // Obtener el código del producto

fetch(URL + '/productos/' + id) // Obtener el producto
.then(res => res.json()) // Convertir la respuesta a JSON
.then(data => { // Mostrar los datos en consola
    console.log(data);
    document.getElementById('codigo').value = data[0];
    document.getElementById('nombre').value = data[1];
    document.getElementById('precio').value = data[2];
    document.getElementById('stock').value = data[3];
});

const documento = document.getElementById('formulario');

documento.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(documento); // Obtener los datos del formulario

    fetch(URL + '/productos/' + id, { // Enviar los datos al servidor
        method: 'PUT', // Metodo de envio
        body: formData // Los datos del formulario
    })
     .then(res => res.json()) // Convertir la respuesta a JSON
     .then(data => { // Mostrar los datos en consola
        console.log(data);
        alert('Producto modificado correctamente');
        window.location.reload(); // Recargar la página
    })
})
