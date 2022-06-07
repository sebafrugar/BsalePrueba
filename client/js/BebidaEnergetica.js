const request = fetch("http://localhost:8000/api/prueba")

fetch('http://localhost:8000/api/prueba')
    .then((response) =>{
        return response.json();
    }).then((response) =>{
        const filtrar = response.productos.filter(filtro => filtro.category === 1);
        console.log(filtrar)
        document.getElementById("producto").innerHTML = response.productos.filter(filtro => filtro.category === 1).map(producto => `
            <div class="card d-inline-block" style="width: 17rem ;">
                <div class="card-header rounded mx-auto d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `).join('')
    })
    .catch(error => console.log(error))