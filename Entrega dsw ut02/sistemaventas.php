<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de ventas</title>
</head>

<body>
<h1>Suscripción electrónica a nuestro boletín de noticias.</h1>
    <form action="comprobarusuario.php" method="POST" />
    Nombre: <input type="text" name="nombre" /></br>
    Apellidos: <input type="text" name="apellidos" size="40" /></br>
    password: <input type="password" name="contras" /><br />
    repeat password: <input type="password" name="repeat" /><br />
    telefono: <input type="text" name="telefono" /><br />
    e-mail: <input type="text" name="email" size="35" /></br>
    <br>
    <p>Dia de la semana que le interesa recibirlo:</p>
    <select name="usuario">
        <option>Tipo de usuario:</option>
        <option value="Administrador">administrador</option>
        <option value="empleado">empleado</option>
        <option value="cliente">cliente</option>
    </select>
    <br>
    <p>Seleccione una foto de perfil</p>
        <input type="file" name="foto" accept="image/*" required>
    <p>
    <input type="submit" value="Registrar usuario" style="color: black;">
    </p>

    </form>

</body>
</html>