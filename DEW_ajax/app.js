
function login() {

    fetch('./datos/usuario.json')
    .then(response => response.json())
    .then(data =>{
        let username = document.getElementById('usuario').value;
        let clave = document.getElementById('clave').value;
    
        if (username === data.usuario && clave === data.clave) {
            alert("El usuario " + data.usuario + " ha iniciado cesion correctamente.");
            window.location.href = 'listarProductos.html'
        } else {
            alert("No se ha podido iniciar cesion, por favor introduzca de nuevo las credenciales");
            document.getElementById('usuario').value = "";
            document.getElementById('clave').value = "";
        }
    }
    ).catch(error => console.error("No se ha podido cargar el archivo json: ", error))

}







