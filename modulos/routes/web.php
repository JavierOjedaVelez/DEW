<?php

use App\Http\Controllers\ModuloController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    session_start();
    if(isset($_SESSION) && isset($_SESSION["usuario"])){
        $usuario = $_SESSION["usuario"];
        return view('principal', ["seccion" => "volver", "usuario" => $usuario]);
    } else {
        return view('principal', ["seccion" => "", "usuario" => ""]);
    }
})->name('principal');

Route::post('/login', [UsuarioController::class, 'login'])->name('usuarios.login');

// Logout
Route::get('/logout', [UsuarioController::class, 'logout'])->name('usuarios.logout');
