<?php

function validarCampos()
{
    
    $camposValidar = ['nombre', 'apellidos', 'contras', 'repeat', 'telefono','email', 'usuario', 'foto'];

    foreach ($camposValidar as $campo) {
        if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
            throw new Exception("Error Campo: El campo $campo esta vacío.");
        }else{

        }
    }
}
