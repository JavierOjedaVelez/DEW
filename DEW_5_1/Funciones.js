
let product1 = new Producto('1', 'manzana',"2" );
let product2 = new Producto('2', 'pera',"2" );


let productlist = [product1, product2];
function createproduct(){
    
    const code = document.getElementById("code").value;
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    const product = new Producto(code, name, price);
    productlist.push(product);

    alert("El producto " + product.getName() + " se ha generado correctamente");

    CreateProductTable();
    document.getElementById("Formpost").reset;

}


function CreateProductTable(){
    let tablaresultado = document.getElementById("result");
    tablaresultado.innerHTML = ""
    let tabla = document.createElement("table");
    let fila = document.createElement("tr");
    let cabeceras = ["Codigo", "Nombre", "Precio"];
    
    for(let i in cabeceras){
        //Genera la cabecera de la tabla
        let th = document.createElement("th");
        th.textContent = cabeceras[i];
        fila.appendChild(th);
    }
    tabla.appendChild(fila);
    tablaresultado.appendChild(tabla);
    
    for(i in productlist){
        //Genera los atributos del producto y los añade a la tabla
        let fila1 = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3  = document.createElement("td");
        td1.textContent = productlist[i].getCode();
        td2.textContent = productlist[i].getName();
        td3.textContent = productlist[i].getPrice();
        fila1.appendChild(td1);
        fila1.appendChild(td2);
        fila1.appendChild(td3)
        tabla.appendChild(fila1);
        tablaresultado.appendChild(tabla);
    }


}

function SearchProduct(){
    const searchcode = document.getElementById("codfilter");
    const seachname = document.getElementById("namefilter");

}

function showProducts(productc, productn){
    const result = document.getElementById("result");
    if(productc.getCode() == productlist[i].getCode() ||productn.getName() == productlist[i].getName()){

    }

}
   


