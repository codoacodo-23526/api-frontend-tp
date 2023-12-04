const URL = "http://localhost:4000"



fetch(URL + '/productos') // Obtener los productos
    .then(res => res.json()) // Convertir la respuesta a JSON
    .then(data => { // Mostrar los datos en consola
       let html = ''; // Variable para guardar el HTML
console.log(data);

       data.forEach(element => {

        //Bucktick `` para concatenar , interpolacion de variables ${}
        if (element.imagen_url == null) {
            imagen = '';
        }
        else
        {
            imagen =`<img src="../static/imagenes/${element.imagen_url}" width="100"></img>` 
        }

        html = html + `<tr>
            <td>${element.id}</td>
            <td>${element.nombre}</td>
            <td>${element.precio}</td>
            <td>${element.stock}</td>
            <td>${imagen}</td>
            <td><a href="modificar.html?codigo=${element.id}">Modificar</a></td>
            <td><button class="alert" onclick="eliminar(${element.id});">Eliminar</button></td>
        </tr>`;
       });

       document.getElementById('productos').innerHTML = html;
    });


function eliminar(id){

    fetch(URL + '/productos/' + id, { // Hago la petición a la API para eliminar el producto
        method: 'DELETE' // Indico el método HTTP
    }).then(res => res.json()) // Convierto la respuesta a JSON
    .then(data => {
        console.log(data); // Muestro los datos en consola
        alert('Producto eliminado: ' + id); // Muestro un mensaje al usuario
        window.location.reload(); // Recargo la página
    });


}