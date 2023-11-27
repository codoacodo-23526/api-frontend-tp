
const URL = "http://localhost:4000/"
const documento = document.getElementById('formulario');

documento.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(documento);

    fetch(URL + '/productos', {
        method: 'POST',
        body: formData
    })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        alert('Producto agregado correctamente');
        window.location.href = 'index.html'
    })

})
