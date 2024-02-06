function ListProducts(){
    fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);

    });
}
    /*const apiUrl = 'https://dummyjson.com/products';
    var resultados = document.getElementById("resultados");
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            resultados.innerHTML = xhr.responseText;
        } else {
            console.log('Server response:', xhr.status);
        }
    };
    xhr.onerror = () => {
    };
    xhr.open('GET', apiUrl, true);
    xhr.send();
    }
*/