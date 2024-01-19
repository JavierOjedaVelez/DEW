<?php

namespace App\Http\Controllers;
use  App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function login(Request $request)
    {
        $request->validate(
            [
                'alias' => 'required',
                'clave' => 'required'
            ]
        );

        $usuario = new Usuario();

        $datosUsuario = $usuario->comprobar_usuario($request->alias,  $request->clave);
        if ($datosUsuario === false || $datosUsuario == null) {
            echo "false";
        } else {
            // si todo va correctamente iniciamos sesión y accedemos a la aplicación
            session_start();

            $_SESSION['alias'] = $request->alias;
            $_SESSION['carrito'] = [];
            return response()->json(["respuesta" => true, "alias" => $request->alias]);
        }
    }

    public function logout()
    {
        $sesion = new Usuario();
        $respuesta = $sesion->logout();
        return response()->json($respuesta);
    }
}
