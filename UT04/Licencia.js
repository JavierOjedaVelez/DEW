
class Licencia extends  Propietario{
    constructor(name, lastname, telf, mat, code){
        super(name, lastname, telf);
        this.mat = mat;
        this.code = code;
    }

    ShowLicense(){
        document.write("RESUMEN" + "<br>");
        document.write("Nombre del propietario: " + this.name + "<br>");
        document.write("Apellidos del propietario: " + this.lastname + "<br>");
        document.write("telefono del propietario: " + this.telf + "<br>");
        document.write("Matricula: " + this.mat + "<br>");
        document.write("Codigo de licencia: " + this.code + "<br>");


    }
}