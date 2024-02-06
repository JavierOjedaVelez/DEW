function ListProducts() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://dummyjson.com/products', true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const productos = data.products;
            const divResultados = document.getElementById("Resultados");
    
            productos.forEach((producto) => {
                let carta = document.createElement("div");
                carta.classList.add("carta");
    
                carta.innerHTML = `
                    <img src="${producto.images[0]}">
                    <h2>${producto.title}</h2>
                    <p>Precio: ${producto.price}</p>
                    <p>Descripción: ${producto.description}</p>
                    <p>Stock: ${producto.stock}</p>
                    <button type="button" class="btn btn-primary" onclick="ShowEditar()">Editar</button>
                    <button type="button" class="btn btn-danger" onclick="deleteProduct(${producto.id})">Eliminar</button>
                `;
    
                divResultados.appendChild(carta);
            });
        }
    };
    
    xhr.send();
    
}


function deleteProduct(productId) {

    const xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', `https://dummyjson.com/products/${productId}`, true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Producto eliminado exitosamente el producto con id: ' + productId);
            } else {
                console.error(`Error al eliminar el producto. Código de estado: ${xhr.status}`);
            }
        }
    };
    
    xhr.send();
    
}


function AddProducts(){

}

function UpdateProducts(){

}

