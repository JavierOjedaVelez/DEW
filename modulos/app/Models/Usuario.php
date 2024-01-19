<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    public static function comprobarSesion()
    {
        session_start();

        if (isset($_SESSION['alias'])) {
            return true;
        }

        return false;
    }

    public function logout()
    {
        $this->comprobarSesion();
        $_SESSION = array();
        session_destroy(); // eliminar la sesion
        setcookie(session_name(), 123, time() - 1000); // eliminar la cookie
        return true;
    }

    function leer_config($rutaFicheroConf)
    {
        // se cargan los datos del fichero XML
        $datos = simplexml_load_file($rutaFicheroConf);
        $usu = $datos->xpath("//alias");
        $clave = $datos->xpath("//clave");
        $resul = [];
        $resul[] = $usu[0];
        $resul[] = $clave[0];
        return $resul;
    }

    function comprobar_usuario($nombre, $clave)
    {
        $res = $this->leer_config(storage_path('app/datos/configuracion.xml'));
        return $nombre == $res[0] && $clave == $res[1];
    }
}
