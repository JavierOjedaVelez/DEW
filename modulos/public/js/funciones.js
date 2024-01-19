function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
            if (respuesta["respuesta"] === false) {
                alert("Revise usuario y contraseña");
            } else {
                var usuario = respuesta["usuario"];
                document.getElementById("menu_usuario").innerHTML = "Usuario: " + usuario;
                document.getElementById("login").style.display = "none";
                document.getElementById("Admin").style.display = "block";
                document.getElementById("menu").style.display = "block";
                /*ponemos el usuario devuelto en el hueco correspondiente*/

            }
        }
    }

    var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    var params = "usuario=" + usuario + "&clave=" + clave;
    xhttp.open("post", "/login", true);
    // envío con POST requiere cabecera y cadena de parámetros
    // Cuando es petición POST debemos poner el CSRF de Laravel.
    xhttp.setRequestHeader('X-CSRF-TOKEN', token);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.send(params);
    return false;
}

function logout() {
    /*cerrar sesión*/
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(this.responseText);
            /*cambiar visibilidades de las secciones*/
            if (respuesta == true) {
                alert("Sesion cerrada con éxito");
                document.getElementById("cabecera").style.display = "none";
                document.getElementById("procesar").style.display = "none";
                document.getElementById("login").style.display = "block";
                document.getElementById("contenido").innerHTML = "";

            }
        }
    };
    xhttp.open("GET", "logout", false);
    xhttp.send();
}
