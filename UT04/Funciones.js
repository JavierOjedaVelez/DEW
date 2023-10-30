function ShowError(err){
    switch(err){
        case '1001':
            alert("Error tipo numerico: El tipo de dato no es correcto, debes introducir un numero");
            break;
        case '1002':
            alert("Error tipo String: El tipo de dato introducido no es correcto");
            break;
        case '1003':
            alert("Error de formato: El formato del numero de telefono debe ser +nn-nnnnnnnnn0");
            break;
        case '1004':
            alert("Error de formato: EL formato de la matricula no es correcto");
            break;
        case '1005':
            alert("Error de formato: EL codigo de licencia es de 4 numeros");
            break;

    }
}

function ValidString(str) {
    if (str !== "" && typeof str === 'string') {
        return str;
        
    } else {
        error = '1002';
        ShowError(error);
        valido = false
        return valido;
    }
}

function ValidMat(mat){
    const remat = /^[1-9]{4}[-]{1}[A-Z]{3}$/;
    if(remat.test(mat)){
        return true;
    }else{
        error = '1004';
        ShowError(error);
        return false;
    }
}

function ValidTelf(telf){
    const retelf = /^[+]{1}[0-9]{2}[-]{1}[0-9]{9}$/;

    if(retelf.test(telf)){
return true;
}else{
error = '1003';
ShowError(error);
}
return false;
}

function ValidCode(code){
    const recode = /^[1-9]{4}$/;
    if(recode.test(code)){
        return true;
    }else{
        error = '1005';
        ShowError(error);
        return false;
    }
}

function ValidData(name, lastname, telf, mat, code) {
    if (ValidString(name) && ValidString(lastname) && ValidTelf(telf)&& ValidMat(mat) && ValidCode(code)){
            let licencia = new Licencia(name, lastname, telf, mat, code);
            licencia.ShowLicense();
            valido = true;
            return valido;
         }
           
            else {
                return valido;
           }  
}

